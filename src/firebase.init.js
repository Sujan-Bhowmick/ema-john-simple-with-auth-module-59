// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXwqyoEINkESB_nvi_M85VRzqp5QqJmR4",
  authDomain: "ema-john-simple-c551a.firebaseapp.com",
  projectId: "ema-john-simple-c551a",
  storageBucket: "ema-john-simple-c551a.appspot.com",
  messagingSenderId: "560699306291",
  appId: "1:560699306291:web:67644f09f1d5bfc9738e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth