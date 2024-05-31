// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARAzSIF5ZSSUTtHeYh2Pas7Mp6SaQxOjQ",
  authDomain: "natural-haven-ec069.firebaseapp.com",
  projectId: "natural-haven-ec069",
  storageBucket: "natural-haven-ec069.appspot.com",
  messagingSenderId: "216759740779",
  appId: "1:216759740779:web:34c4c9df4d96cdb691842e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
