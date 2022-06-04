import { ReactComponent as LogoSVG } from "./troll3.svg";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <LogoSVG className={styles.logo} />
      <h1 className={styles.title}>
        <span className={styles.titleColor1}>detec</span>
        <span className={styles.titleColor2}>troll</span>
      </h1>
    </div>
  );
};
export default Logo;
