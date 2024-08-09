// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkxpe1f4woMShf7e7OqtyloUXheZChYWQ",
  authDomain: "pantry-3b534.firebaseapp.com",
  projectId: "pantry-3b534",
  storageBucket: "pantry-3b534.appspot.com",
  messagingSenderId: "722089110528",
  appId: "1:722089110528:web:c4c02a7c33c66d94f1bce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};