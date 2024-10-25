import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] md:px-12 px-2 absolute bg-gradient-to-r from-black">
      <h1 className=" font-bold text-xl text-white md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block  py-6 text-lg w-1/3 text-white text-justify">{overview}</p>
      <div className="">
        <button className="bg-white bg-opacity-90 text-black mt-4 md:mt-0 p-3 md:p-4 md:px-12 mx-2 text-xl font-semibold rounded-lg hover:bg-opacity-80">
          <i className="fi fi-rs-play mx-2 top-[.2rem] relative"></i>
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 bg-opacity-90 text-white p-4 px-12 mx-2 text-xl font-semibold rounded-md hover:bg-opacity-80">
          <i className="fi fi-rr-info mx-2 top-[.2rem] relative"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
