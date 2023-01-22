import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: add it in the .env file
const firebaseConfig = {
    apiKey: "AIzaSyBB89bl8iB6IR6nSFCbl9fZt6ZPEmcDiz4",
    authDomain: "nfcproject-35a25.firebaseapp.com",
    databaseURL: "https://nfcproject-35a25-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nfcproject-35a25",
    storageBucket: "nfcproject-35a25.appspot.com",
    messagingSenderId: "22936921915",
    appId: "1:22936921915:web:9a9ac4b5b722082ae7791e",
    measurementId: "G-QWKE0MQ2DR"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();


export default app