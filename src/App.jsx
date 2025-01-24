import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAj11joOBKy65UjeFUQHDjVnhlnIjQFLWY",
  authDomain: "prcatica8.firebaseapp.com",
  databaseURL: "https://prcatica8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prcatica8",
  storageBucket: "prcatica8.firebasestorage.app",
  messagingSenderId: "950144189179",
  appId: "1:950144189179:web:51b0b3a4c749cc3838a65e",
  measurementId: "G-TWWLXEQNVB",
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const App = () => {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Obtenemos los likes desde Firebase
  useEffect(() => {
    const likesRef = ref(db, "likes/");
    onValue(likesRef, (snapshot) => {
      const data = snapshot.val();
      setLikes(data || 0);  // Si no hay datos, establece likes en 0
      setLoading(false); // Cambiar estado de carga cuando se obtienen los datos
    }, (err) => {
      setError(err.message); // Captura el error si hay uno
      setLoading(false); // Detenemos el estado de carga
    });
  }, []);

  // Incrementar likes
  const incrementLikes = () => {
    const likesRef = ref(db, "likes/");
    set(likesRef, likes + 1)  // Actualiza los likes en Firebase
      .catch((err) => {
        setError("Error al actualizar los likes: " + err.message); // Maneja el error
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">BlogApp</h1>
      {loading ? (
        <p className="mt-4 text-xl text-gray-600">Cargando...</p>
      ) : (
        <p className="mt-4 text-xl text-gray-600">Número de "likes": {likes}</p>
      )}
      {error && <p className="text-red-500">{error}</p>} {/* Mostrar errores */}
      <button
        onClick={incrementLikes}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Dar Like
      </button>
    </div>
  );
};

export default App;
