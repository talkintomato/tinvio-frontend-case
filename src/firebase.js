// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkHArt0t6sL1Em0evoCIC7h_R3shsncMY",
  authDomain: "tinvio-demo.firebaseapp.com",
  projectId: "tinvio-demo",
  storageBucket: "tinvio-demo.appspot.com",
  messagingSenderId: "1003573688109",
  appId: "1:1003573688109:web:e5bd1a935629fa42f085a4",
  measurementId: "G-C03KEVHX7X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
