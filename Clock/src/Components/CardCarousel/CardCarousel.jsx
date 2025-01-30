import styles from "./Styles/CardCarousel.module.scss"
import { useState } from 'react';

export default function CardCarousel({ checked }) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles["card-item-carousel"]}>
            <div className={styles["upper-part"]}>
                <div className={styles["left-part"]}>
                    <div className={styles["title-part"]}>
                        Fumar crack
                    </div>
                    <div className={styles["priority-part"]}>
                        <div className={styles["color-part"]}></div>
                    </div>
                </div>
                <div className={styles["right-part"]}>
                </div>
            </div>
        </div>
    )
}
