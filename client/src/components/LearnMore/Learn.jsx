import styles from './Learn.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function Learn() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Trolls are antisocial behavior that is created from controversial or offensive content on a website that draws attention, provokes or offends other users.
        <br />
        Our app allows you to recognize these negative behaviors!
      </div>
      <Link to="/" className={styles.arrowDiv}>
        <IoIosArrowBack className={styles.icon} />
        <div className={styles.back}>Back</div>
      </Link>
    </div>
  )
}
