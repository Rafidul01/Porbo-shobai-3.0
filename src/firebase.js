// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtKcZ5czDifqQkFYPdVq4d4y2LD6L_ga0",
    authDomain: "porbo-sobai.firebaseapp.com",
    projectId: "porbo-sobai",
    storageBucket: "porbo-sobai.appspot.com",
    messagingSenderId: "929103324895",
    appId: "1:929103324895:web:7ac07f19a454c71cb96b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);