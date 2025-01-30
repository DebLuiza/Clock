import { useState } from 'react';
import styles from './Styles/CustomCheckBox.module.scss';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={styles["custom-checkbox"]}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className={styles["custom-checkbox-input"]}
      />
      <span className={styles["custom-checkbox-checkmark"]}></span>
    </label>
  );
};

export default CustomCheckbox;