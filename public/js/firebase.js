// const firebaseConfig = {
//     apiKey: "Sizning-API-KEY-m",
//     authDomain: "Sizning-authDomain-m",
//     projectId: "Sizning-projectId-m",
//     storageBucket: "Sizning-storageBucket-m",
//     messagingSenderId: "Sizning-messagingSenderId-m",
//     appId: "Sizning-appId-m"
// };

// // Firebase-ni boshlang'ichlashtirish
// firebase.initializeApp(firebaseConfig);

// // Firestore bazasiga ulash
// let db = firebase.firestore();

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { firestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "Sizning-API-KEY-m",
    authDomain: "Sizning-authDomain-m",
    projectId: "Sizning-projectId-m",
    storageBucket: "Sizning-storageBucket-m",
    messagingSenderId: "Sizning-messagingSenderId-m",
    appId: "Sizning-appId-m"
};

// Firebase-ni boshlang'ichlashtirish
const app = initializeApp(firebaseConfig);

// Firestore bazasiga ulanish
const db = firestore(app);
