// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4f0MM8-hUbbDLY3eS1wSpCQPeCoZHXuc",
  authDomain: "form3-32e47.firebaseapp.com",
  projectId: "form3-32e47",
  storageBucket: "form3-32e47.appspot.com",
  messagingSenderId: "698553574111",
  appId: "1:698553574111:web:560465b164f34f120aff6a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{ app , auth }