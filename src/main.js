import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebase.js"

import firebase from 'firebase'
// import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
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
