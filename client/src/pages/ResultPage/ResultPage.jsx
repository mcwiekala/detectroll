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
      <SearchBox className={styles.searchContainer} />
      <Trollscore trollScore={state.score} isTroll={state.isTroll} />
      <ProgressBar data={state.attributes} />
      <Summary text={state.message} />
      <Footer />
    </div>
  )
}

export default ResultPage
