// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDguC6BC4czfY3VvsLBNPl5aTSvzlm89C4",
  authDomain: "portfolio-website-95302.firebaseapp.com",
  projectId: "portfolio-website-95302",
  storageBucket: "portfolio-website-95302.appspot.com",
  messagingSenderId: "191742723679",
  appId: "1:191742723679:web:749cec78e4476b201f3dea",
  measurementId: "G-XK3R0KJK5V"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance
export { db };

// Export the form submission function
export async function addFormData(name, email, surname) {
  try {
    const docRef = await addDoc(collection(db, "submissions"), {
      firstname: name,
      email: email,
      surname: surname,
      timestamp: serverTimestamp() // Add a timestamp
    });
    console.log("Document added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
