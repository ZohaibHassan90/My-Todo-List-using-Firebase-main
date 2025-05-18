// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCs_rb19TUKf2yjwb-3z0KB8Hni3XAAEbY",
    authDomain: "todo-app-13b5a.firebaseapp.com",
    projectId: "todo-app-13b5a",
    storageBucket: "todo-app-13b5a.firebasestorage.app",
    messagingSenderId: "20219520250",
    appId: "1:20219520250:web:9012ecbed7ae5805241543"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);