import React from 'react'
import styles from './Styles/AnotationPostIt.module.scss'

export default function AnotationPostIt({text}) {
  return (
    <div className={styles["post-it-note"]}>
        <p>{text}</p>
    </div>
  )
}
