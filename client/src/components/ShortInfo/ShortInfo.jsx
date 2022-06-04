import styles from './ShortInfo.module.scss'
import { Link } from 'react-router-dom'
const ShortInfo = () => {
  return (
    <div className={styles.shortInfoContainer}>
      <p className={styles.shortInfo}>
        This tool helps you identify
        <br />
        troll accounts on Twitter!
      </p>
      <Link to="/learn-more" className={styles.learnMore}>
        learn more
      </Link>
    </div>
  )
}
export default ShortInfo
