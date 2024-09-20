
// // npm install -g firebase-tools
// /src/config/firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAjKKkw86Xk4f92wOC6M3jX9a24WhUW2Js",
  authDomain: "fir-login-c1799.firebaseapp.com",
  projectId: "fir-login-c1799",
  storageBucket: "fir-login-c1799.appspot.com",
  messagingSenderId: "746416205525",
  appId: "1:746416205525:web:6419b4c72a19dad18cfc5c",
  measurementId: "G-377EBGXZ3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

const db=getFirestore(app);
// const colRef = collection (db,"Rooms")


// Export 'auth' for use in other files
export { auth,db };
