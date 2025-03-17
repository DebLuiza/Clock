import React from 'react'
import styles from './Styles/Anotation.module.scss'
import PropTypes from "prop-types";

export default function Anotation({ tamHeader }) {

    const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  return (
    <div
        className={styles["container-main"]}
        style={{ height: calculatedHeight }}
    >
        <div className={styles["post-it-note"]}>
            <p>This folded corner works on any colored background!</p>
        </div>
        <div className={styles["btn-criar"]}>

        </div>
    </div>
  )
}

Anotation.propTypes = {
    tamHeader: PropTypes.number.isRequired,
  };
