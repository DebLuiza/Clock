import styles from "./Styles/CardTarefasLista.module.scss"
import editIcon from "../../assets/Icons/editIcon.svg"
import trashIcon from "../../assets/Icons/trashIcon.svg"
import ModalEditCreate from "../../Common/ModalEditCreate/ModalEditCreate"
import { useState } from "react"

export default function CardTarefasLista() {

    const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles["card-item-tarefa"]}>
        <div className={styles["text-part"]}>
            Nome Tarefa
        </div>
        <div className={styles["buttons-part"]}>
            <button className={styles["btn-edit"]} onClick={() => setShowModal(true)}>
                <img src={editIcon} alt="" />
            </button>
            <button className={styles["btn-excluir"]}>
                <img src={trashIcon} alt="" />
            </button>
        </div>
        <ModalEditCreate show={showModal} closeModal={() => setShowModal(false)} title={'Editar Tarefa'}/>
    </div>
  )
}
