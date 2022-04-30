import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu7ByrVuTyLPHvYcHD4EQypKxBd7_rFzk",
  authDomain: "library-app-f525f.firebaseapp.com",
  projectId: "library-app-f525f",
  storageBucket: "library-app-f525f.appspot.com",
  messagingSenderId: "664078551956",
  appId: "1:664078551956:web:b1b525dd17993f6f5d9d81",
  measurementId: "G-D96H6ZF620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);