import { ReactComponent as LogoSVG } from "./troll3.svg";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <div class={styles.logoContainer}>
      <LogoSVG class={styles.logo} />
      <h1 class={styles.title}>
        <span class={styles.titleColor1}>detec</span>
        <span class={styles.titleColor2}>troll</span>
      </h1>
    </div>
  );
};
export default Logo;
