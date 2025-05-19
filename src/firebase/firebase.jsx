// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ You need this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPeRQ4Qh73tENNg6zmPi6yQV-dNOYs-54",
  authDomain: "crop-care-solutions.firebaseapp.com",
  projectId: "crop-care-solutions",
  storageBucket: "crop-care-solutions.firebasestorage.app",
  messagingSenderId: "640270101225",
  appId: "1:640270101225:web:306c15a4ddf4e3fe0e9e78",
  measurementId: "G-CP398CTQYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize and export Auth
const auth = getAuth(app);
export { auth };
