// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getStorage } from "firebase/storage";

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

const storage = new Storage();

//-
// Make a bucket's contents publicly readable.
//-
const myBucket = storage.bucket('https://console.firebase.google.com/project/booktokapi/storage/booktokapi.appspot.com/files');

const options = {
  entity: 'allUsers',
  role: storage.acl.READER_ROLE
};

myBucket.acl.add(options, function(err, aclObject) {});

//-
// If the callback is omitted, we'll return a Promise.
//-
myBucket.acl.add(options).then(function(data) {
  const aclObject = data[0];
  const apiResponse = data[1];
});






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);


// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
export {app, analytics, firebaseConfig}