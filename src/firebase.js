// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXyxRvc4kHC_du5Opk2325VHkoRRDvMzQ",
  authDomain: "food-delivery-system-6a59f.firebaseapp.com",
  projectId: "food-delivery-system-6a59f",
  storageBucket: "food-delivery-system-6a59f.firebasestorage.app",
  messagingSenderId: "268837451100",
  appId: "1:268837451100:web:6ff425fed92a03c7333d99",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);

export {db};