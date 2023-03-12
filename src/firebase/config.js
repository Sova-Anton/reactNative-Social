import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYve57u4EeMkRsv1rAHeqVYChKC1tAmsY",
  authDomain: "rn-social-7dc4b.firebaseapp.com",
  projectId: "rn-social-7dc4b",
  storageBucket: "rn-social-7dc4b.appspot.com",
  messagingSenderId: "603367295527",
  appId: "1:603367295527:web:4ed885f3e1a11932589c02",
  measurementId: "G-91MR76JRTW",
};

export default firebase.initializeApp(firebaseConfig);
