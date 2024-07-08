// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAoEmRS-X2cOxxsZ_CkxuPk0pDEDPqw3VI",
  authDomain: "avtosalon-571f0.firebaseapp.com",
  projectId: "avtosalon-571f0",
  storageBucket: "avtosalon-571f0.appspot.com",
  messagingSenderId: "968913525976",
  appId: "1:968913525976:web:6090ecc8f5f74570bc4bad"
};

const app = initializeApp(firebaseConfig);
export const imgdb = getStorage(app);
export const db = getFirestore(app)