import styles from "./Styles/MainPage.module.scss";
import PropTypes from "prop-types";

export default function MainPage({ tamHeader }) {
  return (
    <div
      className={styles["container-main"]}
      style={{ height: `100vh - ${tamHeader}px` }}
    >
      Mainnnnn
    </div>
  );
}

MainPage.propTypes = {
  tamHeader: PropTypes.number.isRequired,
};
