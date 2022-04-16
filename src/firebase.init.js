// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmG6dOnCDkxJWTFwkIRMcgVApJbTD165Y",
    authDomain: "fit-to-fly-13471.firebaseapp.com",
    projectId: "fit-to-fly-13471",
    storageBucket: "fit-to-fly-13471.appspot.com",
    messagingSenderId: "406041116003",
    appId: "1:406041116003:web:008e40493e63c0c68be756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;