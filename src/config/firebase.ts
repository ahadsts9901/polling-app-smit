import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB40awq88DjoYcRpiCP1svcdCE3QWyLEcA",
    authDomain: "react-firebase-smit-e66c7.firebaseapp.com",
    projectId: "react-firebase-smit-e66c7",
    storageBucket: "react-firebase-smit-e66c7.firebasestorage.app",
    messagingSenderId: "927231985259",
    appId: "1:927231985259:web:bd469d44f2ed708d05932e",
    measurementId: "G-CS9VTFQVMY"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
