import styles from "./Styles/MetodosEstudos.module.scss"
import PropTypes from "prop-types";
import { useState } from "react";

export default function MetodosEstudos({ tamHeader }) {

  const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  const methods = [
    { name: "Pomodoro", description: "Técnica de estudo que alterna períodos de foco com pequenas pausas." },
    { name: "Mapas Mentais", description: "Uso de diagramas para organizar informações visualmente." },
    { name: "Feynman", description: "Aprender explicando conceitos de forma simples." },
    { name: "Técnica de Interrogação Elaborativa", description: "Fazer perguntas sobre o material para aprofundar a compreensão." },
    { name: "Autoexplicação", description: "Explicar conceitos para si mesmo para reforçar o aprendizado." },
    { name: "Método de Cornel", description: "Sistema de anotações que melhora a retenção e compreensão." },
    { name: "Ensino a Outra Pessoa", description: "Aprender ensinando outra pessoa." },
  ];

  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div
      className={styles["container-main"]}
      style={{ height: calculatedHeight }}
    >
      <div className={styles["card"]}>
        <div className={styles["header-web-site"]}>
          <div className={styles["circles-line"]}>
            <div className={`${styles["circle"]} ${styles["red"]}`}></div>
            <div className={`${styles["circle"]} ${styles["yellow"]}`}></div>
            <div className={`${styles["circle"]} ${styles["green"]}`}></div>
          </div>
        </div>
        <h2>Métodos de Estudo</h2>
        <div className={styles["methods-part"]}>
          <ul>
            {methods.map((method, index) => (
              <li key={index} onClick={() => setSelectedMethod(method)}>{method.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {selectedMethod && (
        <div className={styles["modalOverlay"]} onClick={() => setSelectedMethod(null)}>
          <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
            <div className={styles["header-web-site"]}>
              <div className={styles["circles-line"]}>
                <div className={`${styles["circle"]} ${styles["red"]}`} onClick={() => setSelectedMethod(null)}></div>
                <div className={`${styles["circle"]} ${styles["yellow"]}`}></div>
                <div className={`${styles["circle"]} ${styles["green"]}`}></div>
              </div>
            </div>
            <div className={styles["content-part"]}>
              <h3>{selectedMethod["name"]}</h3>
              <p>{selectedMethod["description"]}</p>
              <button className= {styles['btn-modal-metodos']} onClick={() => setSelectedMethod(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

MetodosEstudos.propTypes = {
  tamHeader: PropTypes.number.isRequired,
};