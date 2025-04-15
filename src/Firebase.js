// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import necessary auth functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwD5UupRwK_QbnqMHxVousWot11VMfhNM",
  authDomain: "cencom-ad7dc.firebaseapp.com",
  projectId: "cencom-ad7dc",
  storageBucket: "cencom-ad7dc.firebasestorage.app",
  messagingSenderId: "822584638267",
  appId: "1:822584638267:web:2684bce8e854f92316d51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth module

export { auth, signInWithEmailAndPassword }; // Export necessary functions
