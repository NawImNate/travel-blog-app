import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh1Ne5xRe_ZUM12P1CE8-5LyeHAPOZJbQ",
  authDomain: "travel-blog-3236b.firebaseapp.com",
  projectId: "travel-blog-3236b",
  storageBucket: "travel-blog-3236b.appspot.com",
  messagingSenderId: "47421183202",
  appId: "1:47421183202:web:f938a8070ea4de80583abb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connecting to db firestore authentication and provider
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
