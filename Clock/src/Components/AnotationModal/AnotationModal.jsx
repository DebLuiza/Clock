import React, { useEffect, useRef } from "react";
import "./Styles/AnotationModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const AnotationModal = ({ show, closeModal }) => {
  const modalRef = useRef(null);

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

  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Nova Anotação</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div className="modal-body">
            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Título</label>
            </div>
            <div className="group">
              <input type="date" required />
              <label className="date-input">Data</label>
            </div>
            <div className="group comment">
              <textarea required rows="4"></textarea>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label></label>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Fechar
            </button>
            <button className="btn btn-primary" data-bs-dismiss="modal">
              Salvar Anotação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotationModal;
