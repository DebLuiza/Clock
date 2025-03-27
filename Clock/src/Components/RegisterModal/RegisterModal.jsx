import React, { useEffect, useRef } from "react";
import './Styles/RegisterModal.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"; 

const RegisterModal = ({ show, closeModal }) => {
  const modalRef = useRef(null);
    const navigate = useNavigate(); 

  useEffect(() => {
    if (modalRef.current) {
      const modalElement = modalRef.current;
      const modal = new bootstrap.Modal(modalElement, { backdrop: "static" });

      if (show) {
        modal.show();
      } else {
        modal.hide();
      }

      modalElement.addEventListener("hidden.bs.modal", closeModal);

      return () => {
        modalElement.removeEventListener("hidden.bs.modal", closeModal);
      };
    }
  }, [show, closeModal]);

  const setNavigate = () => {
    navigate("/tarefas");
  }

  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"> 
            <h5 className="modal-title">Registrar Novo Usuário</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div className="modal-body">
            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Nome de Usuário</label>
            </div>
            <div className="group">
              <input type="email" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
            <div className="group">
              <input type="password" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Senha</label>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Fechar
            </button>
            <button className="btn btn-primary" data-bs-dismiss="modal">
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
