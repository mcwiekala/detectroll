import styles from './SearchBox.module.scss'
import { IoSend } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react'
const SearchBox = ({ className, twitterHandle }) => {
  const { register, handleSubmit, watch, touchedFields } = useForm({
    defaultValues: {
      searchBox: twitterHandle || '',
    },
  })
  const searchText = watch('searchBox')
  const navigate = useNavigate()
  const switchIcons = searchText.length > 0 && searchText !== twitterHandle
  const onSubmit = () => {
    console.log(searchText)
    axios
      .get(`/api/analyze/${searchText}`)
      .then((response) => {
        if (response?.data?.score) {
          navigate('/result', {
            state: {
              ...response.data,
              twitterHandle: searchText,
            },
          })
        }
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.searchBoxContainer}>
        {!switchIcons && <span className={styles.searchBoxAtIcon}>@</span>}
        <input type="text" className={styles.searchBox} placeholder="twitter handle..." {...register('searchBox')}></input>
        {switchIcons && (
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
