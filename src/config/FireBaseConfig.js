
const admin = require("firebase-admin");

const serviceAccount = require("https://accounts.google.com/o/oauth2/auth?client_id=577859285076-1v 2");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
});

import { getRemoteConfig } from "firebase/remote-config";
const remoteConfig = getRemoteConfig(app);

const firebaseConfig = {
  apiKey: "AIzaSyC_2Jv_BZrhnOeTJM7RsVVo3dl6kKkSo_I",
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

// async function getUserByEmail() {
//   const user = await auth.getUserByEmail('user@example.com');
//   console.log(user);
// }

// // Call the function
// getUserByEmail();

export { admin, db, storage, auth, firebaseConfig };
