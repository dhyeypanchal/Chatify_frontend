// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl5KMpfyOVDAQbhqFwY1v9wCwjVLYXFjg",
  authDomain: "chat-742d7.firebaseapp.com",
  projectId: "chat-742d7",
  storageBucket: "chat-742d7.appspot.com",
  messagingSenderId: "637347048617",
  appId: "1:637347048617:web:864311d6beb91bb3ce4db8",
  measurementId: "G-VTPQEKSYFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;