import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXhHqol7GbYFmfusiwaY_j8k2eqwjRTDw",
    authDomain: "miappcoderhouse.firebaseapp.com",
    projectId: "miappcoderhouse",
    storageBucket: "miappcoderhouse.appspot.com",
    messagingSenderId: "294113807088",
    appId: "1:294113807088:web:ba4fba62cd1564c6d89035"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;