import styles from './Footer.module.scss'
import TrollFooter from '../TrollFooter/TrollFooter'
export function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      {props?.trolls && <TrollFooter />}
      <div className={styles.footer}>illustrations by freepik.com </div>
    </div>
  )
}

export default Footer
