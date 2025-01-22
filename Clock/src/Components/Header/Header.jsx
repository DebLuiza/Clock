import PropTypes from 'prop-types';
import styles from "./Styles/Header.module.scss";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ImgHeader from "../../assets/Icons/clock-vector.svg";

export default function Header({ onHeaderChange }) {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      onHeaderChange(height);
    }
  }, [onHeaderChange]);

  const [clicked, setClicked] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      ref={headerRef}
      className={
        colorChange
          ? `${styles["header"]} ${styles["colorChange"]}`
          : `${styles["header"]}`
      }
    >
      <div id={styles["mobile"]} onClick={() => setClicked(!clicked)}>
        <input
          type="checkbox"
          className={styles["input-hamb"]}
          checked={clicked}
          readOnly
        />
        <div className={styles["hamburger-lines"]}>
          <span className={`${styles["line"]} ${styles["line1"]}`}></span>
          <span className={`${styles["line"]} ${styles["line2"]}`}></span>
          <span className={`${styles["line"]} ${styles["line3"]}`}></span>
        </div>
      </div>
      <ul
        className={
          clicked
            ? ` ${styles["links"]} ${styles["active"]}`
            : styles["links"]
        }
      >
        <li>
          <Link to={"/"}>
            <img
              src={ImgHeader}
              alt="Header Icon"
              className={styles["img-header"]}
            />
          </Link>
        </li>
        <ul className={styles["other-links"]}>
          <li>
            <Link to={"/metodos"}>Metodos de Estudos</Link>
          </li>
          <li>
            <Link to={"/"}>Temporizador</Link>
          </li>
          <li>
            <Link to={"/"}>Sair</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

Header.propTypes = {
  onHeaderChange: PropTypes.func.isRequired,
};
