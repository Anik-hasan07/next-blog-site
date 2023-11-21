import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE, 
  authDomain: "blog-8a110.firebaseapp.com",
  projectId: "blog-8a110",
  storageBucket: "blog-8a110.appspot.com",
  messagingSenderId: "941292408649",
  appId: "1:941292408649:web:caef1a967e143c3b625498",
  measurementId: "G-Z7RYRWZ9G2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


