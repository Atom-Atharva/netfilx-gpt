// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYQ4f0z_trmUQKG-q90_BYiWV8852HmI0",
    authDomain: "netflixgpt-f63bd.firebaseapp.com",
    projectId: "netflixgpt-f63bd",
    storageBucket: "netflixgpt-f63bd.appspot.com",
    messagingSenderId: "505327533672",
    appId: "1:505327533672:web:188ba063c03b8b0ea9c5dd",
    measurementId: "G-DJQ82LWH1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
