// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBMqPbUkJ6YTPQWDpfqq4Xjje0jIdQaxeY",
  authDomain: "rchat-d85c9.firebaseapp.com",
  projectId: "rchat-d85c9",
  storageBucket: "rchat-d85c9.appspot.com",
  messagingSenderId: "999466109038",
  appId: "1:999466109038:web:d646032617ed982adf7e7f",
  measurementId: "G-96JH0JYQR5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  
export const auth = getAuth();
export const storage = getStorage();
