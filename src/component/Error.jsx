import React from 'react';

const Error = () => {
  return (
    <div className="flex justify-center items-center bg-slate-500 h-screen bg-cover bg-center"
         style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/1c3e3a5e-16a9-4678-9a25-e8463224d1f3.jpg')" }}>
      <div className="text-center p-8 bg-black bg-opacity-70 rounded-lg w-4/5 max-w-xl">
        <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-white mb-6">We couldn't load the content. Please try again later.</p>
        <button
          className="bg-red-600 text-white text-xl py-2 px-6 rounded-full hover:bg-red-700 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
