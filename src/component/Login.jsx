import React from "react";
import Header from "./Header";
import netflixBG from "../assets/netflix-background.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const handleClickToggle = ()=>{
    setisSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div>
        <img className="absolute " src={netflixBG} alt="" />
      </div>

      <form className="z-10 text-white absolute py-10 px-16 bg-black bg-opacity-80  w-[35%] h-max my-20 right-0 left-0 mx-auto rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          className="p-4 my-2 w-full bg-[rgba(0,0,0,0.5)] rounded-md border-white border-opacity-50 border"
          type="text"
          placeholder="Full Name"
        />}
        <input
          className="p-4 my-2 w-full bg-[rgba(0,0,0,0.5)] rounded-md border-white border-opacity-50 border"
          type="email"
          placeholder="Email address"
        />
        <input
          className="p-4 my-2 w-full bg-[rgba(0,0,0,0.5)] rounded-md border-white border-opacity-50 border"
          type="password"
          placeholder="password"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-md font-semibold hover:bg-red-800">
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && <div className="text-center text-gray-300">OR</div>}
        {isSignIn && <button className="p-2 my-6 bg-[rgba(64,63,63,0.87)] w-full rounded-md font-semibold disabled">
          Use a Sign-in code
        </button>}
        <p className="cursor-pointer" onClick={handleClickToggle}>
        {isSignIn ? "New to Netflix? Sign up now." : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
