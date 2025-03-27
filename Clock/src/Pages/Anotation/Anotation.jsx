import React from 'react'
import styles from './Styles/Anotation.module.scss'
import PropTypes from "prop-types";
import AnotationPostIt from '../../Components/AnotationPostIt/AnotationPostIt';

export default function Anotation({ tamHeader }) {

    const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  return (
    <div
        className={styles["container-main"]}
        style={{ height: calculatedHeight }}
    >
        <AnotationPostIt text={"Testinhoooo"}/>
        <div className={styles["btn-criar"]}>

        </div>
    </div>
  )
}

Anotation.propTypes = {
    tamHeader: PropTypes.number.isRequired,
  };
