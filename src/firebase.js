import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';

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
  return signInWithEmailAndPassword(auth, email, password);
}
function register(email, password){
  console.log(email, password);
  return createUserWithEmailAndPassword(auth, email, password);
}
function getUserName(){
  let username = auth.currentUser.displayName;
  return username;
}
async function getAuthState(){
  let _user;
  await onAuthStateChanged(auth, (user) =>{
    _user = user;
  });
  return _user;
}
function logout(){
  signOut(auth);
}
export { login, register, logout, getAuthState, getUserName };