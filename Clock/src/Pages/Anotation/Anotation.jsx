import React from 'react'
import styles from './Styles/Anotation.module.scss'
import PropTypes from "prop-types";
import AnotationPostIt from '../../Components/AnotationPostIt/AnotationPostIt';
import AnotationModal from '../../Components/AnotationModal/AnotationModal';
import { useState } from 'react';

export default function Anotation({ tamHeader }) {

    const calculatedHeight = `calc(100vh - ${tamHeader}px)`;
    const [showModal, setShowModal] = useState(false);

  return (
    <div
        className={styles["container-main"]}
        style={{ height: calculatedHeight }}
    >
      <div className={styles["anotations-container"]}>
        <AnotationPostIt text={"Texto Anotação"}/>
        <AnotationPostIt text={"Texto Anotação"}/>
        <AnotationPostIt text={"Texto Anotação"}/>
        <AnotationPostIt text={"Texto Anotação"}/>
      </div>
      <div className={styles["btn-criar"]} onClick={() => setShowModal(true)}>
        Criar Anotação
      </div>
      <AnotationModal show={showModal} closeModal={() => setShowModal(false)}/>
    </div>
  )
}

Anotation.propTypes = {
    tamHeader: PropTypes.number.isRequired,
  };
