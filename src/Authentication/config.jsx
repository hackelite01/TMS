import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const provider=new GoogleAuthProvider();
export {auth,provider}