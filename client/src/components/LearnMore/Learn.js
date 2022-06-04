import styles from './Learn.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function Learn() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Witam serdecznie nasza aplikacja very gut, searching trolls, full of zasadzkas, and be carefull coz a lot of impossible racism aspeków. Stworzona przez zespół ludzi którzy
        za wszelką cenę postanowili walczyć ze złem trolli.
      </div>
      <Link to="/" className={styles.arrowDiv}>
        <IoIosArrowBack className={styles.icon} />
        <div className={styles.back}>Back</div>
      </Link>
    </div>
  )
}
