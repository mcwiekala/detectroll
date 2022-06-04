import LogoSVG from './troll3.svg'
import styles from './Logo.module.scss'
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={LogoSVG} className={styles.logo} />
      <h1 className={styles.title}>
        <span className={styles.titleColor1}>detec</span>
        <span className={styles.titleColor2}>troll</span>
      </h1>
    </div>
  )
}
export default Logo
