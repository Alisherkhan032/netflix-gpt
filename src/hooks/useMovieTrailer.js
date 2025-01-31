import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const UseMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const getMovieVideo = async () => {
    try {
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();

      const filteredData = json.results.filter((video) => {
        return video.type == "Teaser";
      });

      const trailer =
        filteredData.length > 0 ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default UseMovieTrailer;
