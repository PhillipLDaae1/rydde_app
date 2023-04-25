import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbMjVZp8i08nD6GQvNE7wcd1T34HHZDMA",
  authDomain: "ryddeapp-6fba5.firebaseapp.com",
  projectId: "ryddeapp-6fba5",
  storageBucket: "ryddeapp-6fba5.appspot.com",
  messagingSenderId: "414548116321",
  appId: "1:414548116321:web:7ff18567566a925dc4bb20",
  measurementId: "G-9EM7B3M60G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db
}

