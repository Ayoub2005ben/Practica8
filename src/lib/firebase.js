// src/lib/firebase.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Para interactuar con Firestore

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAj11joOBKy65UjeFUQHDjVnhlnIjQFLWY",
  authDomain: "prcatica8.firebaseapp.com",
  databaseURL: "https://prcatica8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prcatica8",
  storageBucket: "prcatica8.firebasestorage.app",
  messagingSenderId: "950144189179",
  appId: "1:950144189179:web:51b0b3a4c749cc3838a65e",
  measurementId: "G-TWWLXEQNVB"
};

// Verifica si Firebase ya está inicializado antes de inicializar
let app;
if (getApps().length === 0) {
  // Si no existe ninguna instancia, inicializamos Firebase
  app = initializeApp(firebaseConfig);
} else {
  // Si ya existe, usamos la instancia actual
  app = getApp();
}

// Inicializa Firestore
const db = getFirestore(app);

export { db };
