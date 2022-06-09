// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7KvobrMx9i_KZwfhkKAJbZHa3FOvARio",
  authDomain: "clone-80a92.firebaseapp.com",
  projectId: "clone-80a92",
  storageBucket: "clone-80a92.appspot.com",
  messagingSenderId: "65674115768",
  appId: "1:65674115768:web:4bb4b092b38348d0d7524d",
  measurementId: "G-XRMFDSRRFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;