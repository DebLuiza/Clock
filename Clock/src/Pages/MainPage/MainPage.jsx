import styles from "./Styles/MainPage.module.scss";
import PropTypes from "prop-types";
import ItemTarefas from "../../Components/ItemTarefas/ItemTarefas";
import Carousel from "../../Components/Carousel/Carousel";
import CalendarComponent from "../../Components/Calendar/Calendar";

export default function MainPage({ tamHeader }) {

  const calculatedHeight = `calc(100vh - ${tamHeader}px)`;

  return (
    <div
      className={styles["container-main"]}
      style={{ height: calculatedHeight}}
    >
      <div className={styles["left-container"]}>
        <ItemTarefas/>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["carousel-part"]}>
            <Carousel/>
        </div>
        <div className={styles["calendar-part"]}>
            <CalendarComponent/>
        </div>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  tamHeader: PropTypes.number.isRequired,
};
