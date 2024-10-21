import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, userAvatar } from '../utils/constants';

const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
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

        navigate("/browse")
         
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    //clean up when component unmounts
    return ()=>{
      unsubscribe();
    }
  }, []);

  return (
    <div className='flex justify-between z-10 absolute w-full  px-8 py-2 bg-gradient-to-b from-[rgba(0,0,0,0.7)] '>
        <img className='w-48' src={LOGO} alt="logo"/>

        {
          user &&
          <div className='flex p-4'>
          <img 
          className='w-10 h-10'
          src={userAvatar} alt="userIcon" />

          <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
        </div>

        }
    </div>
  )
}

export default Header