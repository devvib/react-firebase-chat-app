// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvtIL4tuZ0DMT0AVCwlR7v9-Q_uyZw8RM",
  authDomain: "chatapp-eedf4.firebaseapp.com",
  projectId: "chatapp-eedf4",
  storageBucket: "chatapp-eedf4.appspot.com",
  messagingSenderId: "98920970801",
  appId: "1:98920970801:web:6e1bf6982fc47aff3d7310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();