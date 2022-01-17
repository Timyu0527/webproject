import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDtrtsJaFh8mQgvlyAxJVG2tm5ugbC0IsI",
  authDomain: "webproject-da7bc.firebaseapp.com",
  projectId: "webproject-da7bc",
  storageBucket: "webproject-da7bc.appspot.com",
  messagingSenderId: "600994560335",
  appId: "1:600994560335:web:917abf467eb64d9b3aed3a",
  measurementId: "G-HYRYSHE9M3"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
function login(email, password){
  // return new Promise((res, rej) => {
  signInWithEmailAndPassword(auth, email, password).then(() => {
    console.log('success');
  }).catch((e) => {console.log(e)});
  // });
}
function register(email, password){
  console.log(email, password);
  return createUserWithEmailAndPassword(auth, email, password);
}
export { login, register };