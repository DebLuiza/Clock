import CustomCheckbox from "../../Common/CustomCheckBox/CustomCheckBox";
import styles from "./Styles/CardCarousel.module.scss"
import { useState } from 'react';

export default function CardCarousel() {

    return (
        <div className={styles["card-item-carousel"]}>
            <div className={styles["upper-part"]}>
                <div className={styles["left-part"]}>
                    <div className={styles["title-part"]}>
                        Comprar bombom
                    </div>
                    <div className={styles["priority-part"]}>
                        <div className={styles["color-part"]}></div>
                    </div>
                </div>
                <div className={styles["right-part"]}>
                    <CustomCheckbox/>
                </div>
            </div>
        </div>
    )
}
