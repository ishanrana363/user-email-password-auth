// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw7yiH8Zy74zLxhmzBb11D9y31dYefjSk",
    authDomain: "user-email-password-auth-d2de3.firebaseapp.com",
    projectId: "user-email-password-auth-d2de3",
    storageBucket: "user-email-password-auth-d2de3.appspot.com",
    messagingSenderId: "254188597425",
    appId: "1:254188597425:web:0178d20f71f8ce9fadf290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;