import LogoSVG from './troll3.svg'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
const Logo = (props) => {
  return (
    <Link to="/" {...props} className={`${styles.logoContainer} ${props.className || ''}`}>
      <img src={LogoSVG} className={styles.logo} alt="Logo" />
      <h1 className={styles.title}>
        <span className={styles.titleColor1}>detec</span>
        <span className={styles.titleColor2}>troll</span>
      </h1>
    </Link>
  )
}
export default Logo
