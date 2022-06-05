import styles from './Summary.module.scss'
import Troll from './troll1.svg'

const Summary = ({ text }) => {
  return (
    <div className={styles.summary}>
      <img src={Troll} alt="" className={styles.summary__logo} />
      <span className={styles.summary__desc}>{text}</span>
    </div>
  )
}

export default Summary
