// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_1Ao0FHYRrf3Y8HCqZrW_xrBZkR_sAFo",
  authDomain: "uber-next-clone-live-70f0f.firebaseapp.com",
  projectId: "uber-next-clone-live-70f0f",
  storageBucket: "uber-next-clone-live-70f0f.appspot.com",
  messagingSenderId: "299545067371",
  appId: "1:299545067371:web:7d3321ea073e313233162e",
  measurementId: "G-C3QFL4HYHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };
