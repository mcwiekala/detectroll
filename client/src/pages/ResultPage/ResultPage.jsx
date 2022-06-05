import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import SearchBox from '../../components/SearchBox/SearchBox'
import Summary from '../../components/Summary/Summary'
import styles from './ResultPage.module.scss'
import { Trollscore } from '../../components/Trollscore/Trollscore'
import { useLocation } from 'react-router-dom'

const ResultPage = () => {
  const { state } = useLocation()
  console.log('propss', state)

  return (
    <div>
      <Logo className={styles.logo} />
      <div className={styles.container}>
        <SearchBox />
      </div>
      <Trollscore />
      <ProgressBar data={state} />
      <Summary />
      <Footer />
    </div>
  )
}

export default ResultPage
