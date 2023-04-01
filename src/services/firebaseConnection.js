import { initializeApp } from "firebase/app"; // Inicializa  o APP
import { getAuth } from "firebase/auth"; // Autenticação
import { getFirestore } from "firebase/firestore"; // Para poder fazer a conexão
import { getStorage } from "firebase/storage"; // Para poder fazer a conexão

// credenciais
const firebaseConfig = {
  apiKey: "AIzaSyB1-aAhPWJetzGCLiSNdLmN8oHl2RPjPI0",
  authDomain: "smart-parking-client-24bfa.firebaseapp.com",
  projectId: "smart-parking-client-24bfa",
  storageBucket: "smart-parking-client-24bfa.appspot.com",
  messagingSenderId: "757341842445",
  appId: "1:757341842445:web:bf3c5ffb1ce2b3e8443944",
  measurementId: "G-CG449LZJ7E"
};

const firebaseApp = initializeApp(firebaseConfig); // para iniciar

const auth = getAuth(firebaseApp); // para inicializar a autenticação
const db = getFirestore(firebaseApp); // é  o nosso banco
const storage = getStorage(firebaseApp); // é  o nosso banco

export { auth, db, storage };
