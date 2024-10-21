import React, { useRef } from "react";
import Header from "./Header";
import netflixBG from "../assets/netflix-background.jpg";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [isVisible, setIsVisble] = useState(true);
  const [erorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const hanldePasswordToggle = () => {
    setIsVisble(!isVisible);
  };

  const handleClickToggle = () => {
    setisSignIn(!isSignIn);
  };
  const handleFormSubmit = () => {
    // validate form data
    const response = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(response); // null = valid, otherwise invalid (returns a string)

    if (response) {
      // only null means valid
      return;
    }

    if (!isSignIn) {
      //* sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/112810526?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(erorMessage);
        });
    } else {
      //* sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img className="absolute " src={netflixBG} alt="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-10 text-white absolute py-10 px-16 bg-black bg-opacity-80  w-[35%] h-max my-20 right-0 left-0 mx-auto rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-2 w-full bg-[rgba(0,0,0,0.5)] rounded-md border-white border-opacity-50 border"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full bg-[rgba(0,0,0,0.5)] rounded-md border-white border-opacity-50 border"
          type="email"
          placeholder="Email address"
        />
        <div className="flex relative justify-start items-center w-full">
          <input
            ref={password}
            className="p-4 my-2 w-full bg-[rgba(0,0,0,0.5)] rounded-md border-white border-opacity-50 border"
            type={isVisible ? "password" : "text"}
            placeholder="password"
          />
          <i
            onClick={hanldePasswordToggle}
            className={
              `mx-2 absolute right-0 cursor-pointer fi fi-rr-eye` +
              (!isVisible ? "-crossed" : "")
            }
          ></i>
        </div>

        <p className="text-red-500 text-lg py-2"> {erorMessage} </p>

        <button
          onClick={handleFormSubmit}
          className="p-2 my-6 bg-red-700 w-full rounded-md font-semibold hover:bg-red-800"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && <div className="text-center text-gray-300">OR</div>}
        {isSignIn && (
          <button className="p-2 my-6 bg-[rgba(64,63,63,0.87)] w-full rounded-md font-semibold disabled">
            Use a Sign-in code
          </button>
        )}
        <p className="cursor-pointer" onClick={handleClickToggle}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
