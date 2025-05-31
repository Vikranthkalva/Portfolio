import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXyxRvc4kHC_du5Opk2325VHkoRRDvMzQ",
    authDomain: "food-delivery-system-6a59f.firebaseapp.com",
    projectId: "food-delivery-system-6a59f",
    storageBucket: "food-delivery-system-6a59f.firebasestorage.app",
    messagingSenderId: "268837451100",
    appId: "1:268837451100:web:6ff425fed92a03c7333d99",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };