import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LOGO, userAvatar, SUPPORTED_LANGUAGES } from "../utils/constants";
import {changeLanguage} from "../utils/configSlice"

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //clean up when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e)=>{
    const languagePicked = e.target.value;
    dispatch(changeLanguage(languagePicked))
  }

  return (
    <div className="flex justify-between z-10 absolute w-full  px-8 py-2 bg-gradient-to-b from-[rgba(0,0,0,0.7)] ">
      <img className="w-48" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-4">
          {isGptSearch && (
            <select 
              onChange={handleLanguageChange}
              className="px-4 mx-4 -mt-1 text-lg rounded-lg  bg-blue-200">
              {SUPPORTED_LANGUAGES.map((lang, idx) => (
                <option key={idx} value={lang.identifier}>
                  {lang.language}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="px-4 -mt-1 bg-slate-500 text-white rounded-lg shadow-md shadow-slate-600"
          >
            {!isGptSearch ? "GPT Search" : <i class="fi fi-sr-arrow-small-left "> <span>Go back</span> </i>}
          </button>
          <img className="w-10  h-10 mx-4" src={userAvatar} alt="userIcon" />

          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
