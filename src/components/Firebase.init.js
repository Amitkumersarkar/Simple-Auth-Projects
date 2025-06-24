// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsACd1kn6r345z0ENb9FkgLSGAJS4xuCQ",
    authDomain: "auth-form-f835e.firebaseapp.com",
    projectId: "auth-form-f835e",
    storageBucket: "auth-form-f835e.firebasestorage.app",
    messagingSenderId: "441686625081",
    appId: "1:441686625081:web:aad08c89158ddd1973b6e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;