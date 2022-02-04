// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";

const firebaseConfig = {
  apiKey: "AIzaSyCt0ewRsM4ltSTQ78gpnn7PZIUX52W31Lo",
  authDomain: "medfordmap2.firebaseapp.com",
  databaseURL: "https://medfordmap2-default-rtdb.firebaseio.com",
  projectId: "medfordmap2",
  storageBucket: "medfordmap2.appspot.com",
  messagingSenderId: "1096097233102",
  appId: "1:1096097233102:web:e871bf3eba187dcc9a789f",
  measurementId: "G-RMQFL83NQR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
