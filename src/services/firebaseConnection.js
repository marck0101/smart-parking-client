import { initializeApp } from "firebase/app"; // Inicializa  o APP
import { getAuth } from "firebase/auth"; // Autenticação
import { getFirestore } from "firebase/firestore"; // Para poder fazer a conexão
import { getStorage } from "firebase/storage"; // Para poder fazer a conexão

// credenciais
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const firebaseApp = initializeApp(firebaseConfig); // para iniciar

const auth = getAuth(firebaseApp); // para inicializar a autenticação
const db = getFirestore(firebaseApp); // é  o nosso banco
const storage = getStorage(firebaseApp); // é  o nosso banco

export { auth, db, storage };
