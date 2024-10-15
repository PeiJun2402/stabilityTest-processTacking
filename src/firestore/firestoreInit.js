
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBha2WPGUWXoUVxeFlImHJpxlHm3HVSE7g",
  authDomain: "stabilitytest-1a72d.firebaseapp.com",
  projectId: "stabilitytest-1a72d",
  storageBucket: "stabilitytest-1a72d.appspot.com",
  messagingSenderId: "541505927272",
  appId: "1:541505927272:web:5c9f47c3865f922a8ea3dd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }