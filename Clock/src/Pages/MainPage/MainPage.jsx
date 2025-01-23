import styles from "./Styles/MainPage.module.scss";
import PropTypes from "prop-types";

export default function MainPage({ tamHeader }) {

  const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  return (
    <div
      className={styles["container-main"]}
      style={{ height: calculatedHeight }}
    >
      <div className={styles["left-container"]}>

      </div>
      <div className={styles["right-container"]}>

      </div>
    </div>
  );
}

MainPage.propTypes = {
  tamHeader: PropTypes.number.isRequired,
};
