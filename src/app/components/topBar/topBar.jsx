import { IconPlus } from "@tabler/icons-react";
import ButtonAdd from "../buttonAdd/buttonAdd.jsx";
import styles from "./topBar.module.css";

const TopBar = () => {
  
  return (
    <div className={styles.topBar}>
      <div className={styles.brandPosition}>
        <h1 className={styles.brand}>VagaNet</h1>
      </div>
      <div className={styles.buttonAdd}>
        <ButtonAdd />
      </div>
    </div>
  );
};

export default TopBar;
