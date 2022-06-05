import styles from './Learn.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function Learn() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>About us:</h1>
        Trolls are antisocial behavior that is created from controversial or offensive content on a website that draws attention, provokes or offends other users.
        Our app allows you to recognize these negative behaviors!
        <br />
        <h2>Attributes:</h2>
        <div>
          <p><strong>insult</strong> - Insulting, inflammatory, or negative comment towards a person or a group of people.</p>
          <p><strong>profanity</strong> - Swear words, curse words, or other obscene or profane language.</p>
          <p><strong>threat</strong> - Describes an intention to inflict pain, injury, or violence against an individual or group.</p>
          <p><strong>toxicity</strong> - A rude, disrespectful, or unreasonable comment that is likely to make people leave a discussion.</p>
        </div>
        <h2>Technical:</h2>
        <div>
          DetecTroll uses machine learning from <a href="https://www.perspectiveapi.com/">Perspective API</a> to check message content.
        </div>
        <br />
        <div>
          We want to make a world a better place!
        </div>
      </div>
      <Link to="/" className={styles.arrowDiv}>
        <IoIosArrowBack className={styles.icon} />
        <div className={styles.back}>Back</div>
      </Link>
    </div>
  )
}
