// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bba8e.firebaseapp.com",
  projectId: "mern-estate-bba8e",
  storageBucket: "mern-estate-bba8e.appspot.com",
  messagingSenderId: "530897116893",
  appId: "1:530897116893:web:ce230a5b80f3ebf9e9c534"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);