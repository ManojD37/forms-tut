// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ToZ6BdMGL8uO6ggT0Y5RkDB8aAOBbZ4",
  authDomain: "reni-login-proj.firebaseapp.com",
  projectId: "reni-login-proj",
  storageBucket: "reni-login-proj.appspot.com",
  messagingSenderId: "184330481009",
  appId: "1:184330481009:web:4840e99e5102d3795e1ad0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{ app , auth }