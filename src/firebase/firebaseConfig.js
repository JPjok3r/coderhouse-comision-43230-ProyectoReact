// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzCERwTbEHy8wxjibf2ZuGPrdXTTWl7hw",
  authDomain: "vgcoderproject.firebaseapp.com",
  projectId: "vgcoderproject",
  storageBucket: "vgcoderproject.appspot.com",
  messagingSenderId: "673778464356",
  appId: "1:673778464356:web:4cb5a87777bb2b189c1171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);