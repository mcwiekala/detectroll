import styles from './Summary.module.scss'
import Troll from './troll1.svg'

const Summary = () => {
  return (
    <div className={styles.summary}>
      <img src={Troll} alt="" className={styles.summary__logo} />
      <span className={styles.summary__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia.</span>
    </div>
  )
}

export default Summary
