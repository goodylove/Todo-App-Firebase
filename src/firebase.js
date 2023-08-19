import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDciWCZ5NOiIrm23pAW7_wYDxhergqqSKE",
  authDomain: "todo-app-7b01a.firebaseapp.com",
  projectId: "todo-app-7b01a",
  storageBucket: "todo-app-7b01a.appspot.com",
  messagingSenderId: "489142861705",
  appId: "1:489142861705:web:281bbf6eca9452f2daeb58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
