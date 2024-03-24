// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNhGcyxkBf3s5KjUtjOPJV1ThyE0uAm6A",
  authDomain: "unitech-66ebd.firebaseapp.com",
  projectId: "unitech-66ebd",
  storageBucket: "unitech-66ebd.appspot.com",
  messagingSenderId: "1519138615",
  appId: "1:1519138615:web:a7e8368e22adb3cdb60cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);