import TrollLeft from './trollLeft.svg'
import TrollMiddle from './trollMiddle.svg'
import TrollRight from './trollRight.svg'
import styles from './TrollFooter.module.scss'
const TrollFooter = () => {
  return (
    <div className={styles.trollContainer}>
      <img src={TrollLeft} className={styles.trollLeft} />
      <img src={TrollMiddle} className={styles.trollMiddle} />
      <img src={TrollRight} className={styles.trollRight} />
    </div>
  )
}
export default TrollFooter
