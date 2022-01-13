import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
<<<<<<< HEAD
import { firebaseConfig } from "./firebase.js"

import firebase from 'firebase'
=======
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from "./firebase.js"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import router from './router'
// import firebase from 'firebase'
>>>>>>> fe37b3f2a732fe737f328f1b83ca82a3e6a84100
// import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
<<<<<<< HEAD
const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
export const db = firestroe()
// db.collection('shop').get().then(r =>{
//     r.docs.map(doc => {
//         console.log(doc.data());
//     });
// });
// db.collection
console.log(db.collection('shop'));
// const analytics = getAnalytics(app);
createApp(App).mount('#app')
=======
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
// async function getCities(db) {
//   const citiesCol = collection(db, 'shopCart');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// console.log(getCities(db))

createApp(App).use(router).mount('#app');
// register("test@test.com", "testtest");
// console.log(login("test@test.com", "testtest"));
export { login, register };
>>>>>>> fe37b3f2a732fe737f328f1b83ca82a3e6a84100
