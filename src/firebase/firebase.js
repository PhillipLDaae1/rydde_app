import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config object here
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
const db = getFirestore(app);
const auth = getAuth(app);

// Fetch tasks from Firestore
const tasksRef = collection(db, "tasks");
const tasksSnapshot = await getDocs(tasksRef);
const tasks = tasksSnapshot.docs.map((doc) => doc.data());

// Fetch users from Firestore
const usersRef = collection(db, "users");
const usersSnapshot = await getDocs(usersRef);
const users = usersSnapshot.docs.map((doc) => doc.data());

// Fetch done from Firestore
const doneRef = collection(db, "done");
const doneSnapshot = await getDocs(doneRef);
const done = doneSnapshot.docs.map((doc) => doc.data());

export {
  auth,
  db
}

export default {
  tasks,
  users,
  done,
};




