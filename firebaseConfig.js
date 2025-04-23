// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFGz9osgFH_Lt9rPGexD3o8imxAeFZgdw",
  authDomain: "qltbapp.firebaseapp.com",
  databaseURL: "https://qltbapp-default-rtdb.firebaseio.com",
  projectId: "qltbapp",
  storageBucket: "qltbapp.firebasestorage.app",
  messagingSenderId: "216834475114",
  appId: "1:216834475114:web:430ce8aca90db443577613",
  measurementId: "G-6XPHE6NJFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);