import { useState } from "react";
import styles from "./Styles/RegisterModal.module.scss";
import { useNavigate } from "react-router-dom";


export default function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null; 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Cadastro realizado:", { email, password });
    navigate("/tarefas");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Crie sua conta</h2>
        <form onSubmit={handleRegister}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.registerButton}>
            Cadastrar
          </button>
          <button onClick={onClose} className={styles.closeButton}>
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}
