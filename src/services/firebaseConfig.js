import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBCMNOVVwLx2ggfyWo09NEGjLcL9-7hy8Y",
  authDomain: "biografiasafrocentradas.firebaseapp.com",
  projectId: "biografiasafrocentradas",
  storageBucket: "biografiasafrocentradas.appspot.com",
  messagingSenderId: "840193615533",
  appId: "1:840193615533:web:d385a06c535fa4b6f94824",
  measurementId: "G-GNR8N0DF2K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

