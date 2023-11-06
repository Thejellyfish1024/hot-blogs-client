// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxZgVzk10RpWXAEVk38pp4Rdj_eg9WyMc",
  authDomain: "hot-blogs-client.firebaseapp.com",
  projectId: "hot-blogs-client",
  storageBucket: "hot-blogs-client.appspot.com",
  messagingSenderId: "1049900028745",
  appId: "1:1049900028745:web:d58026a3ec779813bf0098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;