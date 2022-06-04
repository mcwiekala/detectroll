import Logo from '../../components/Logo/Logo'
import SearchBox from '../../components/SearchBox/SearchBox'
import ShortInfo from '../../components/ShortInfo/ShortInfo'
import Footer from '../../components/Footer/Footer'
import styles from './MainPage.module.scss'
const MainPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Logo class={styles.logo} />
      <SearchBox />
      <ShortInfo />
      <Footer trolls="true" />
    </div>
  )
}

export default MainPage
