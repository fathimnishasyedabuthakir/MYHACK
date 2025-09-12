import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAqd8HUGxKJt739Q6LcTJqTjzbI8JeVuAk",
  authDomain: "nila-hack.firebaseapp.com",
  databaseURL: "https://nila-hack-default-rtdb.firebaseio.com",
  projectId: "nila-hack",
  storageBucket: "nila-hack.firebasestorage.app",
  messagingSenderId: "762092660854",
  appId: "1:762092660854:web:ab55c3ccb0263d50859757",
  measurementId: "G-JXDHYVNHKH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export default app;