import styles from "./Styles/Header.module.scss"
import { Link } from "react-router-dom"
import { useState } from "react";
import ImgHeader from "../../assets/Icons/clock-vector.svg"

export default function Header() {

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
      className={
        colorChange
          ? `${styles["header"]} ${styles["colorChange"]}`
          : `${styles["header"]}`
      }
    >
    <div id={styles["mobile"]} onClick={() => setClicked(!clicked)}>
    <input type="checkbox" name="" id="" className={styles["input-hamb"]} checked={clicked}/>
    <div className={styles["hamburger-lines"]}>
      <span className={`${styles["line"]} ${styles["line1"]}`}></span>
      <span className={`${styles["line"]} ${styles["line2"]}`}></span>
      <span className={`${styles["line"]} ${styles["line3"]}`}></span>
    </div>
    </div>
    <ul
      className={
        clicked ? ` ${styles["links"]} ${styles["active"]}` : styles["links"]
      }
    >
      <li>
        <Link to={'/'}>
        <img src={ImgHeader} alt="" className={styles["img-header"]}/>
        </Link>
      </li>
      <ul>
      <li className={styles["other-links"]}>
        <Link to={'/metodos'}>Metodos de Estudos</Link>
      </li>
      </ul>
    </ul>
  </div>
  )
}
