import styles from './SearchBox.module.scss'
import { IoSend } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
const SearchBox = () => {
  const { register, handleSubmit, watch } = useForm()
  const searchText = watch('searchBox')
  const onSubmit = () => {
    console.log(searchText)
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.searchBoxContainer}>
        {!searchText && <span className={styles.searchBoxAtIcon}>@</span>}
        <input type="text" className={styles.searchBox} placeholder="twitter handle..." {...register('searchBox')}></input>
        {searchText && (
          <button type="submit" className={styles.sendIconContainer}>
            <IoSend className={styles.sendIcon} />
          </button>
        )}
      </form>
      <Link to="/check-message" className={styles.changeMode}>
        I don't have a twitter
      </Link>
    </div>
  )
}
export default SearchBox
