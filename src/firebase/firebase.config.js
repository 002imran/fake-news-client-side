// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsb5zwc4CCUNOkrZWOITz6iTeoccgKhEU",
  authDomain: "fake-news-client-side.firebaseapp.com",
  projectId: "fake-news-client-side",
  storageBucket: "fake-news-client-side.appspot.com",
  messagingSenderId: "157447954654",
  appId: "1:157447954654:web:a1bb54e9a04483f65aa24f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;