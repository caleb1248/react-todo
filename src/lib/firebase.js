import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBR3UXL4WTJGLQQqHEsOULC3M-azptms_8",
  authDomain: "todobase-1.firebaseapp.com",
  projectId: "todobase-1",
  storageBucket: "todobase-1.appspot.com",
  messagingSenderId: "622496433907",
  appId: "1:622496433907:web:2c2c62f924fd6c7a93d986",
  measurementId: "G-CS8ZZ4EDNK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, db, auth };
