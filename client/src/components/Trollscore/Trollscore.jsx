import styles from './Trollscore.module.scss'
import { useState } from 'react'

export function Trollscore({ trollScore = 0.69, isTroll = true }) {
  console.log(isTroll)

  return (
    <div className={styles.main}>
      <div className={styles.scoreDiv}>
        <div className={styles.percentage}>{trollScore.toFixed(2) * 100}%</div>
        <div className={styles.trollScore}>
          troll
          <br />
          score
        </div>
      </div>
      <div className={styles.isTrollDiv}>{isTroll ? <span className={styles.trollo}>Looks like a troll! </span> : <span className={styles.trollo}>Unlikely a troll!</span>}</div>
    </div>
  )
}
