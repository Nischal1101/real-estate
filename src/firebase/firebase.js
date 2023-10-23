// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1e373.firebaseapp.com",
  projectId: "mern-estate-1e373",
  storageBucket: "mern-estate-1e373.appspot.com",
  messagingSenderId: "296816860728",
  appId: "1:296816860728:web:216232f12a97da872450cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
