import Logo from '../../components/Logo/Logo'
import styles from './LearnMorePage.module.scss'
import { Learn } from '../../components/LearnMore/Learn'
import Footer from '../../components/Footer/Footer'
const LearnMorePage = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <Learn />
      <Footer trolls="true" />
    </div>
  )
}

export default LearnMorePage
