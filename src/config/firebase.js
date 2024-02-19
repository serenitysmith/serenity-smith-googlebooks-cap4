import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
const auth = getAuth(app);
const db = getFirestore(app);

// Listen to the authentication state changes
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("User is signed in:", user.uid);
  } else {
    console.log("User is signed out");
  }
});

// Example Firestore query
const q = query(collection(db, "users"), where("age", ">", 18));

// Execute the query
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

export { app, analytics, auth, db, firebaseConfig };

