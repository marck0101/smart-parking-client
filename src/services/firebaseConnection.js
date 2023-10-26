import { initializeApp } from "firebase/app"; // Inicializa  o APP
import { getAuth } from "firebase/auth"; // Autenticação
import { getFirestore } from "firebase/firestore"; // Para poder fazer a conexão
import { getStorage } from "firebase/storage"; // Para poder fazer a conexão

// credenciais
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig); // para iniciar

const auth = getAuth(firebaseApp); // para inicializar a autenticação
const db = getFirestore(firebaseApp); // é  o nosso banco
const storage = getStorage(firebaseApp); // é  o nosso banco

export { auth, db, storage };
