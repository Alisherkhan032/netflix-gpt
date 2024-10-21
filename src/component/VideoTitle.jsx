import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white ">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white text-justify">{overview}</p>
      <div className="">
        <button className="bg-white bg-opacity-90 text-black p-4 px-12 mx-2 text-xl font-semibold rounded-md hover:bg-opacity-80">
          <i className="fi fi-rs-play mx-2 top-[.2rem] relative"></i>
          Play
        </button>
        <button className="bg-gray-600 bg-opacity-90 text-white p-4 px-12 mx-2 text-xl font-semibold rounded-md hover:bg-opacity-80">
          <i className="fi fi-rr-info mx-2 top-[.2rem] relative"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
