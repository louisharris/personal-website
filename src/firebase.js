// src/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAx25C4AzivUyxQ34CTCrqNbOsIxFloY6E",
  authDomain: "metal-incline-211211.firebaseapp.com",
  databaseURL: "https://metal-incline-211211.firebaseio.com",
  projectId: "metal-incline-211211",
  storageBucket: "metal-incline-211211.appspot.com",
  messagingSenderId: "510319317120",
  appId: "1:510319317120:web:2e03afdfb85bee3f"
};
firebase.initializeApp(config);
export default firebase;