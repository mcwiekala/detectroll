import styles from './Select.module.scss'

const Select = ({ onChange }) => {
  const coreLangs = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'cs', 'pl']

  return (
    <select onChange={onChange} className={styles.select}>
      {coreLangs.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  )
}

export default Select
