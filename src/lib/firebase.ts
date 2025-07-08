// src/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqETV3IXBmyot8ULyIbavAmR0wKPUmBoM",
  authDomain: "bantuone-4b282.firebaseapp.com",
  projectId: "bantuone-4b282",
  storageBucket: "bantuone-4b282.firebasestorage.app",
  messagingSenderId: "277546554284",
  appId: "1:277546554284:web:ad56021a2450c548c16009",
};

// Only initialize once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Export Firestore instance
export const db = getFirestore(app);
