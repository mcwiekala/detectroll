import { ReactComponent as LogoSVG } from "./troll1.svg";
import styles from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={styles.summary}>
      <LogoSVG className={styles.summary__logo} />
      <span className={styles.summary__desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        mollitia id laboriosam porro tenetur.
      </span>
    </div>
  );
};

export default Summary;
