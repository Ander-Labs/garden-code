
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOIGcEO2TbcZIUYyuixZ9mWvIeh9JpVwo",
  authDomain: "garden-code-app.firebaseapp.com",
  projectId: "garden-code-app",
  storageBucket: "garden-code-app.firebasestorage.app",
  messagingSenderId: "610811133188",
  appId: "1:610811133188:web:0079179a1425b54dc16451",
  measurementId: "G-SS5KDCCWT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }