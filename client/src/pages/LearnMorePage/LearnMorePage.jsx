import Logo from '../../components/Logo/Logo'
import styles from './LearnMorePage.module.scss'
import { Learn } from '../../components/LearnMore/Learn'

const LearnMorePage = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Learn />
    </div>
  )
}

export default LearnMorePage
