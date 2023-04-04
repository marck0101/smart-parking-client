import { useState, createContext, useEffect } from "react";
import { auth, db } from "../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
//getDoc para pegar um item único
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@ticketsPRO");

      if (storageUser) {
        //se achou allgum usuário no local Storage
        setUser(JSON.parse(storageUser)); // seta as infos para o User
        setLoading(false);
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  // fazer acesso
  async function signIn(email, password) {
    setLoadingAuth(true);
    //                                                           aqui recebe os dados do usuário que logou
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        const docRef = doc(db, "users", uid); // documento que eu quero acessar, e pegar o ID

        const docSnap = await getDoc(docRef); // uso a referencia usado aacima para realizar o acesso e pegar o que eu preciso
        let data = {
          uid: uid,
          nome: docSnap.data().nome,
          email: value.user.email,
          avatarUrl: docSnap.data().avatarUrl,
        };
        setUser(data); // passa o objeto para o usuário que está logando agora
        storageUser(data); // manda para o localStorage
        setLoadingAuth(false); // para o carregamento da pag.
        toast.success("Bem-vindo(a) ao sistema!");
        // navigate("/dashboard");
        navigate("/home");
      })
      .catch((error) => {
        console.log("erro", error);
        setLoadingAuth(false);
        toast.error("erro ao logar");
      });
  }
  // cadastrar novo usuário
  async function signUp(email, password, name) {
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
      //                                                           aqui recebe os dados do usuário que cadastrou-se

      .then(async (value) => {
        let uid = value.user.uid;
        // passando por um doc, o nosso banco, onde vai cadastrar, e qual a chave que está cadastrando
        await setDoc(doc(db, "users", uid), {
          nome: name,
          avatarUrl: null, // perfil começa sem uma foto
        }).then(() => {
          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null,
          };
          setUser(data);
          setLoadingAuth(false);
          storageUser(data);
          toast.success("Seja bem-vindo!!");
          // navigate("/dashboard");
          navigate("/home");
        });
      })
      .catch(() => {
        console.log("erro ao cadastrar");
        setLoadingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem("@ticketsPRO", JSON.stringify(data));
  }

  async function logout() {
    await signOut(auth); //chama metodo de logout firebase + autenticacão com as credenciais
    localStorage.removeItem("@ticketsPRO"); // remove infos
    setUser(null); // seta null
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, // negando o user ele já vai receber false, pois não inicia a aplicação com usuário nenhum logado
        user,
        signIn,
        signUp,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
