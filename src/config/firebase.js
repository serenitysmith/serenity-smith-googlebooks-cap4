// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC_2Jv_BZrhnOeTJM7RsVVo3dl6kKkSo_I",
  authDomain: "booktokapi.firebaseapp.com",
  projectId: "booktokapi",
  storageBucket: "booktokapi.appspot.com",
  messagingSenderId: "577859285076",
  appId: "1:577859285076:web:79222e86277655f43b7dc1",
  measurementId: "G-ZBH6TZN8RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);

export {app, analytics, firebaseConfig}