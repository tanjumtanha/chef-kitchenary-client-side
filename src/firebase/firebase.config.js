// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd9OB8XkQZC24u2IjqYNjZj619pYgFGl8",
  authDomain: "chef-kitchenary.firebaseapp.com",
  projectId: "chef-kitchenary",
  storageBucket: "chef-kitchenary.appspot.com",
  messagingSenderId: "586553729591",
  appId: "1:586553729591:web:0496bebcbcef451e0b55b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;