import styles from "./Styles/ItemTarefas.module.scss"
import CardTarefasLista from "../CardTarefasLista/CardTarefasLista"
import plusIcon from "../../assets/Icons/plus.svg"
import ModalEditCreate from "../../Common/ModalEditCreate/ModalEditCreate"
import { useState } from "react"

export default function ItemTarefas() {

    const [showModal, setShowModal] = useState(false);


  return (
    <div className={styles["container-tarefas"]}>
      <div className={styles["title-part"]}>
        Tarefas
        <button onClick={() => setShowModal(true)} className={styles["button-addTarefa"]}>
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <div className={styles["scroll-part"]}>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
            <CardTarefasLista/>
      </div>
      <ModalEditCreate show={showModal} closeModal={() => setShowModal(false)} />
    </div>
  )
}
