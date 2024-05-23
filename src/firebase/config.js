// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzvtaz2tfJ7Lm_C5qaTpck62eq3spPuM",
  authDomain: "react-cursos-abac5.firebaseapp.com",
  projectId: "react-cursos-abac5",
  storageBucket: "react-cursos-abac5.appspot.com",
  messagingSenderId: "345218267416",
  appId: "1:345218267416:web:682b34ceba3b6a1209866d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB   = getFirestore(FirebaseApp);