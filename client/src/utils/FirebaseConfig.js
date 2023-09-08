import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDqMEpRhDqML-WCag91eBwN4x9fA8MGGRU",
  authDomain: "whatsappclone-b4b52.firebaseapp.com",
  projectId: "whatsappclone-b4b52",
  storageBucket: "whatsappclone-b4b52.appspot.com",
  messagingSenderId: "1062559188109",
  appId: "1:1062559188109:web:171bb0c33794f74e474ec4",
  measurementId: "G-5PKHKG3J9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);  
export const firebaseAuth = getAuth(app);