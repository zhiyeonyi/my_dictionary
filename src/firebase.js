// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKD-Ck6sYXhRvGrJWP7AJpVbpYMOSgwB0",
  authDomain: "mydictionary-sparta-react.firebaseapp.com",
  projectId: "mydictionary-sparta-react",
  storageBucket: "mydictionary-sparta-react.appspot.com",
  messagingSenderId: "552208342710",
  appId: "1:552208342710:web:d17ae9c0c48fd2217ed017",
  measurementId: "G-M7NSDLPKP0"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
