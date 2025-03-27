import { useState } from "react";
import styles from "./Styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegisterModal from "../../Components/RegisterModal/RegisterModal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/tarefas");
  };

  const openModal = () => {
    setShowModal(true); // Exibe o modal
  };

  const closeModal = () => {
    setShowModal(false); // Fecha o modal
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["loginBox"]}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["inputGroup"]}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles["inputGroup"]}>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles["loginButton"]}>
            Entrar
          </button>

          <div className={styles["registerLink"]}>
            <p>Não tem uma conta? <span onClick={openModal}>Cadastre-se</span></p>
          </div>
        </form>
      </div>

    {/* Modal de Cadastro */}
    <RegisterModal show={showModal} closeModal={closeModal} />

    </div>
  );
}
