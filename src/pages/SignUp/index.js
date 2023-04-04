import { useState, useContext } from "react";
import logo from "../../assets/logoII.png";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault(); // não recarregar a pagina

    if (name !== "" && email !== "" && password !== "") {
      await signUp(email, password, name);
    }
    // toast.warn("Erro, algum campo obrigatório vazio.");

  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema de chamados" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Nova conta</h1>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
        <div>{name}</div>
        <div>{email}</div>
        <div>{password}</div>
        <Link to="/">Já possui uma conta? Faça login</Link>
      </div>
    </div>
  );
}
