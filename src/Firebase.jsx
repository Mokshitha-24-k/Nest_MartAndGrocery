// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS4AIiy9Yjvp_nk3QTCDLC2WGVVwoMDYg",
  authDomain: "nestmartandgroceries.firebaseapp.com",
  projectId: "nestmartandgroceries",
  storageBucket: "nestmartandgroceries.firebasestorage.app",
  messagingSenderId: "697417432070",
  appId: "1:697417432070:web:b1376b94a145b4504b5787",
  measurementId: "G-RP1TKJ4T51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db= getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};