import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from "./firebase.js"

// import firebase from 'firebase'
// import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp);
async function getCities(db) {
  const citiesCol = collection(db, 'shopCart');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
console.log(getCities(db))

createApp(App).mount('#app')
