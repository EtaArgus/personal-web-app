// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLBx40eYvD1yQFl93o5P8iLAQR3huEB_Q",
  authDomain: "etaargus-personal-webapp.firebaseapp.com",
  databaseURL: "https://etaargus-personal-webapp-default-rtdb.firebaseio.com",
  projectId: "etaargus-personal-webapp",
  storageBucket: "etaargus-personal-webapp.appspot.com",
  messagingSenderId: "97420532627",
  appId: "1:97420532627:web:ece5c494c586516d0ae666",
  measurementId: "G-QNCMPLVJ8Q",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
