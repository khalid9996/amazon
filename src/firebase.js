import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAxrHm7DaUw24V83UiV65kZWIBFSm4HfmQ",
    authDomain: "fir-99208.firebaseapp.com",
    projectId: "fir-99208",
    storageBucket: "fir-99208.appspot.com",
    messagingSenderId: "370749081582",
    appId: "1:370749081582:web:a01f299b1eeae42f4270ff",
    measurementId: "G-KKT9WP1YVC"
});

// const db = firebaseApp.firestore();
const auth = getAuth();

// export { db, auth };
export { auth };