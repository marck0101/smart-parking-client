import "./signin.css";
// import logo from "../../assets/logoII.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  //                      'variavel' que possui todas informações de context
  const { signIn, loadingAuth } = useContext(AuthContext);

  async function handleSignIn(e) {
    e.preventDefault();
    if (email !== "" && passWord !== "") {
      await signIn(email, passWord);
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <h1 style={{color: "white", padding: 30}}>Smart Parking Clients</h1>
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="******"
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" value="acessar">
            {loadingAuth ? "Carregando..." : "Acessar"}
          </button>
        </form>
        <Link to={"/register"}>Criar uma conta</Link>
      </div>
    </div>
  );
}
