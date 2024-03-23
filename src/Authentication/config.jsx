import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd3ihCJWkT1ch8RdFs_ZQ784iM8TULVVc",
  authDomain: "typingmaster-392d5.firebaseapp.com",
  projectId: "typingmaster-392d5",
  storageBucket: "typingmaster-392d5.appspot.com",
  messagingSenderId: "766365302597",
  appId: "1:766365302597:web:0f2fe411ada536231cc82c",
  measurementId: "G-4QW0G68521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth
const provider = new GoogleAuthProvider();

export { app, auth, provider };
