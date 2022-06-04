import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import SearchBox from '../../components/SearchBox/SearchBox'
import Summary from '../../components/Summary/Summary'
import { Trollscore } from '../../components/Trollscore/Trollscore'
import styles from './ResultPage.module.scss'

const ResultPage = () => {
  const data = [
    {
      name: 'insult',
      value: 0.59346044,
    },
    {
      name: 'profanity',
      value: 0.7039542,
    },
    {
      name: 'threat',
      value: 0.021160208,
    },
    {
      name: 'toxicity',
      value: 0.97926265,
    },
  ]

  return (
    <div>
      <Logo />
      <div className={styles.container}>
        <SearchBox />
      </div>
      <Trollscore />
      <ProgressBar data={data} />
      <Summary />
      <Footer />
    </div>
  )
}

export default ResultPage
