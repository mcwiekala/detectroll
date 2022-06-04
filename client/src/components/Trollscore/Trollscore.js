import styles from './Totalscore.module.scss'
import { useState } from 'react'

export function Totalscore() {
  const [isTroll, setIsTroll] = useState(true)
  console.log(isTroll)

  return (
    <div className={styles.main}>
      <div className={styles.scoreDiv}>
        <div className={styles.percentage}>84%</div>
        <div className={styles.trollScore}>
          troll
          <br />
          score
        </div>
      </div>
      <div className={styles.isTrollDiv}>{isTroll ? 'Looks like troll!' : 'There is no troll around!'}</div>
    </div>
  )
}
