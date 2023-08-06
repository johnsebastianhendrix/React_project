// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1-2VdRLq2CZA487fJYjsfu_n_QOjQ92c",
  authDomain: "blogproject-6b12b.firebaseapp.com",
  projectId: "blogproject-6b12b",
  storageBucket: "blogproject-6b12b.appspot.com",
  messagingSenderId: "116494726531",
  appId: "1:116494726531:web:754ea4135f77ca4dcc32b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();