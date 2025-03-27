import React, { useEffect, useRef, useState } from "react";
import "./Styles/TimerModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TimerModal = ({ show, closeModal }) => {
  const modalRef = useRef(null);
  const [time, setTime] = useState(() => {
    return localStorage.getItem("timer") || 60;
  });
  const [inputTime, setInputTime] = useState(time);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (modalRef.current) {
      const modalElement = modalRef.current;
      const modal = new bootstrap.Modal(modalElement, { backdrop: "static" });

      if (show) {
        modal.show();
      } else {
        modal.hide();
      }

      modalElement.addEventListener("hidden.bs.modal", () => {
        closeModal();
        document.body.classList.remove("modal-open");
        document.querySelector(".modal-backdrop")?.remove();
      });

      return () => {
        modalElement.removeEventListener("hidden.bs.modal", closeModal);
      };
    }
  }, [show, closeModal]);

  useEffect(() => {
    localStorage.setItem("timer", time);
  }, [time]);

  const startTimer = () => {
    if (intervalId) return;
    setTime(inputTime);
    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(60);
    setInputTime(60);
  };

  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Temporizador</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            ></button>
          </div>
          <div className="modal-body">
            <label>Escolha o tempo (segundos):</label>
            <input
              type="number"
              className="form-control"
              value={inputTime}
              onChange={(e) => setInputTime(Number(e.target.value))}
              min="1"
            />
            <h3>Tempo restante: {time} segundos</h3>
            <button className="btn btn-iniciar" onClick={startTimer}>
              Iniciar
            </button>
            <button className="btn btn-resetar" onClick={resetTimer}>
              Resetar
            </button>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerModal;
