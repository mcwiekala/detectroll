import Logo from '../../components/Logo/Logo'
import SearchBox from '../../components/SearchBox/SearchBox'
import TextArea from '../../components/TextArea/TextArea'
import { Footer } from '../../components/Footer/Footer'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <Logo />
      <TextArea />
      <Footer />
    </div>
  )
}

export default MainPage
