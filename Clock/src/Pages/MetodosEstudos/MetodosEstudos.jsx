import styles from "./Styles/MetodosEstudos.module.scss"
import PropTypes from "prop-types";

export default function MetodosEstudos({ tamHeader }) {

  const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  return (
    <div
      className={styles["container-main"]}
      style={{ height: calculatedHeight }}
    >
      olaaaaaaaaa
    </div>
  )
}

MetodosEstudos.propTypes = {
  tamHeader: PropTypes.number.isRequired,
};