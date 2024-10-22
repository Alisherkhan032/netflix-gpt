import React from "react";
import languages from "../utils/languageConstants"
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langIdentifier = useSelector((store)=> store.config.language);
  const langObj = languages[langIdentifier];

  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" bg-black bg-opacity-70 rounded w-1/2 flex justify-center items-center px-4">
        <input
          type="text"
          className="p-4 m-4 flex-1 rounded-lg text-lg"
          placeholder={langObj.gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-500 text-white rounded-md">
          {langObj.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
