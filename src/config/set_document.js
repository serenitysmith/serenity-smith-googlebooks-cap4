import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Severity",
  state: "Fl",
  country: "USA"
});

console.log("Document written with ID: Severi   ty in Fl USA");