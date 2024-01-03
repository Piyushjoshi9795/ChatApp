// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth ,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk8Zme9cvCzR7B1lfrkrErQMH9sLJvVwA",
  authDomain: "chatapp-1182e.firebaseapp.com",
  projectId: "chatapp-1182e",
  storageBucket: "chatapp-1182e.appspot.com",
  messagingSenderId: "68219082384",
  appId: "1:68219082384:web:fda245da655f13fe4f2a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider =new GoogleAuthProvider();

export const db =getFirestore(app);