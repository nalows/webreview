// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const storage = firebase.storage();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_El7Vs4Xl6thuWfzj-3lj7hjSX9bNxU",
  authDomain: "websidereview.firebaseapp.com",
  projectId: "websidereview",
  storageBucket: "websidereview.appspot.com",
  messagingSenderId: "639370022712",
  appId: "1:639370022712:web:50fea21bd2c26631dd3bcd",
  measurementId: "G-B29PMGT2XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);