// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChRnkVAqve_P4X-7NMgHzZB2JYQ9XQX5A",
  authDomain: "visa-navigator-a94fc.firebaseapp.com",
  projectId: "visa-navigator-a94fc",
  storageBucket: "visa-navigator-a94fc.firebasestorage.app",
  messagingSenderId: "606040093818",
  appId: "1:606040093818:web:55b2a1c0d020a9252fb7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default (auth);