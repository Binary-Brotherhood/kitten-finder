// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQ-0jvloNpUkseKL_GOg6ynz1JcZaHb4",
  authDomain: "fitness-app-6e0ea.firebaseapp.com",
  databaseURL: "https://fitness-app-6e0ea-default-rtdb.firebaseio.com",
  projectId: "fitness-app-6e0ea",
  storageBucket: "fitness-app-6e0ea.appspot.com",
  messagingSenderId: "104408953383",
  appId: "1:104408953383:web:3f4471f70b92db9b5a1402"
};

 
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export default firebaseapp;
export {db};