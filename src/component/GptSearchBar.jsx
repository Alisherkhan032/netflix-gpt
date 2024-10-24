import React, { useRef } from "react";
import languages from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { genAI } from "../utils/geminiAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langIdentifier = useSelector((store) => store.config.language);
  const langObj = languages[langIdentifier];
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //* search movie in tmdb d/b
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1 `,
      API_OPTIONS
    );

    const jsonData = await data.json();

    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as a movie recommendation system. Based on the query '" +
      searchText.current.value +
      "', recommend exactly 10 movie titles. Please provide the results as a comma-separated list, ensuring that no years or additional text are included. Example: 'Golmaal Returns, Sholay, Don, Hum Aapke Hain Kaun, De Dana Dan'.";

    const result = await model.generateContent(prompt);

    console.log(result.response.text());
    const gptMovies = result?.response?.text().split(",");

    // Remove the newline character from the last element
    gptMovies[gptMovies.length - 1] = gptMovies[gptMovies.length - 1].trim();

    //* ['Tumbbad', ' Pari', ' Stree', ' Bhoot: Part One - The Haunted Ship', 'Raaz']

    console.log(gptMovies);

    // For each movie, look for it in TMDB Api

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [promise , promise , promise , promise , promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black bg-opacity-70 rounded w-1/2 flex justify-center items-center px-4"
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 flex-1 rounded-lg text-lg"
          placeholder={langObj.gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-500 text-white rounded-md"
        >
          {langObj.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
