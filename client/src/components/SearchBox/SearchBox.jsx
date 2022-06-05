import styles from './SearchBox.module.scss'
import { IoSend } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const SearchBox = (props) => {
  const { register, handleSubmit, watch } = useForm()
  const searchText = watch('searchBox')
  const navigate = useNavigate()
  const onSubmit = () => {
    console.log(searchText)
    axios
      .get(`/api/analyze/${searchText}`)
      .then((response) => {
        console.log(response)
        if (response?.data?.score) {
          navigate('/result', { state: response.data })
        }
      })
      .catch((error) => console.error(error))
  }
  return (
    <div {...props} className={`${styles.container} ${props.className || ''}`}>
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
