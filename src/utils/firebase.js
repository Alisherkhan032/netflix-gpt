import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-767a0.firebaseapp.com",
  projectId: "netflixgpt-767a0",
  storageBucket: "netflixgpt-767a0.appspot.com",
  messagingSenderId: "865364928848",
  appId: "1:865364928848:web:cfff8d5aad6b1ed1db2455",
  measurementId: "G-PWZT7FH8VS"
};
// Initialize Firebas
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();