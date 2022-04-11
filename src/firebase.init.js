// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrKqibDiw2kUFlLSmBE5Nk_APkzVoXcBw",
  authDomain: "genius-car-services-c89b4.firebaseapp.com",
  projectId: "genius-car-services-c89b4",
  storageBucket: "genius-car-services-c89b4.appspot.com",
  messagingSenderId: "873243035961",
  appId: "1:873243035961:web:746e1f93aee0b3231840e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;