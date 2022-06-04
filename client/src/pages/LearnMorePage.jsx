import Logo from '../components/Logo/Logo'
import styles from './LearnMorePage.module.scss'
import { Learn } from '../components/LearnMore/Learn'

export function LearnMorePage() {
  return (
    <div class={styles.container}>
      <Logo />
      <Learn />
    </div>
  )
}
