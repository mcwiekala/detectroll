import { ReactComponent as TrollLeft } from './trollLeft.svg'
import { ReactComponent as TrollMiddle } from './trollMiddle.svg'
import { ReactComponent as TrollRight } from './trollRight.svg'
import styles from './TrollFooter.module.scss'
const TrollFooter = () => {
  return (
    <div className={styles.trollContainer}>
      <TrollLeft className={styles.trollLeft} />
      <TrollMiddle className={styles.trollMiddle} />
      <TrollRight className={styles.trollRight} />
    </div>
  )
}
export default TrollFooter
