import styles from "./Styles/ItemTarefas.module.scss"
import CardTarefasLista from "../CardTarefasLista/CardTarefasLista"


export default function ItemTarefas() {
  return (
    <div className={styles["container-tarefas"]}>
      <div className={styles["title-part"]}>
        Tarefas
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
    </div>
  )
}
