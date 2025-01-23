import styles from "./Styles/MainPage.module.scss";
import PropTypes from "prop-types";
import ItemTarefas from "../../Components/ItemTarefas/ItemTarefas";

export default function MainPage({ tamHeader }) {

  const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  return (
    <div
      className={styles["container-main"]}
      style={{ height: calculatedHeight }}
    >
      <div className={styles["left-container"]}>
        {/* lista de tarefas aq */}
        <ItemTarefas/>
      </div>
      <div className={styles["right-container"]}>
        {/* calendario e carossel */}
      </div>
    </div>
  );
}

MainPage.propTypes = {
  tamHeader: PropTypes.number.isRequired,
};
