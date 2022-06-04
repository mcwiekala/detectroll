import Logo from '../../components/Logo/Logo'
import TextArea from '../../components/TextArea/TextArea'
import Footer from '../../components/Footer/Footer'
import ShortInfo from '../../components/ShortInfo/ShortInfo'
import styles from './CheckMessagePage.module.scss'
const CheckMessagePage = () => {
  return (
    <div className={styles.pageContainer}>
      <Logo className={styles.logo} />
      <TextArea />
      <ShortInfo />
      <Footer trolls="true" />
    </div>
  )
}

export default CheckMessagePage
