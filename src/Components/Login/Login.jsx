import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("E-mail:", username); // Exibe o e-mail no console
    console.log("Senha:", password); // Exibe a senha no console
    console.log("Envio do formulário concluído!");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUserName(e.target.value)} // Captura o e-mail
          />
          <FaUser className="icon" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha do Usuario"
            onChange={(e) => setPassword(e.target.value)} // Captura a senha
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar de Mim?
          </label>
          <a href="#">Esqueci a Senha</a>
        </div>
        <button type="submit">Entrar</button> {/* Botão de submit */}
      </form>
      <div className="singup-linl">
        <p>
          Nao tem uma conta? <a href="#">Registre-se </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
