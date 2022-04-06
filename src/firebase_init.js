// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3qkxnsxje1lv16r8A31_lzq8LiiSLWGY",
  authDomain: "m56-simple-firebase-auth.firebaseapp.com",
  projectId: "m56-simple-firebase-auth",
  storageBucket: "m56-simple-firebase-auth.appspot.com",
  messagingSenderId: "173378064473",
  appId: "1:173378064473:web:1d9e2c856696356cc2e148",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;