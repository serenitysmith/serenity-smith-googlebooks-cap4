// Import necessary modules from the Firebase Admin SDK


// Initialize Firebase Admin SDK with your service account key
// const serviceAccount = require('path/to/your/serviceAccountKey.json'); // Replace with the path to your service account key JSON file
// import { admin, db, storage, auth, firebaseConfig } from './firebase';
var admin = require("firebase-admin");

var admin = require("firebase-admin");

var serviceAccount = require("https://accounts.google.com/o/oauth2/auth?client_id=577859285076-1v 2");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Your other configuration options go here
});

const firebaseConfig = {
  apiKey: "AIzaSyC_2Jv_BZrhnOeTJM7RsVVo3dl6kKkSo_I",
  authDomain: "booktokapi.firebaseapp.com",
  authDomain: "booktokapi.firebaseapp.com",
  projectId: "booktokapi",
  storageBucket: "booktokapi.appspot.com",
  messagingSenderId: "577859285076",
  appId: "1:577859285076:web:79222e86277655f43b7dc1",
  measurementId: "G-ZBH6TZN8RE"
};

// Now you can use admin SDK modules
const db = admin.firestore();
const storage = admin.storage();
const auth = admin.auth();

// Example of using Firestore
const citiesCollection = db.collection('cities');
citiesCollection.get().then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
});

// Example of using Storage
const bucket = storage.bucket('your-bucket-name');
// Your storage operations go here

// Example of using Auth
const user = await auth.getUserByEmail('user@example.com');
console.log(user);

export { admin, db, storage, auth, firebaseConfig };
