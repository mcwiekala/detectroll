import styles from './SearchBox.module.scss'
import { IoSend } from 'react-icons/io5'
import { BiRefresh } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
const SearchBox = ({ className, twitterHandle }) => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      searchBox: twitterHandle || '',
    },
  })
  const searchText = watch('searchBox')
  const navigate = useNavigate()
  const switchIcons = searchText.length > 0 && searchText !== twitterHandle
  const onSubmit = () => {
    setLoading(true)
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
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.searchBoxContainer} autoComplete="off" spellCheck="false">
        {!switchIcons && <span className={styles.searchBoxAtIcon}>@</span>}
        <input type="text" className={styles.searchBox} placeholder="twitter handle..." {...register('searchBox')}></input>
        {switchIcons && (
          <button disabled={loading} type="submit" className={styles.sendIconContainer}>
            {loading ? <BiRefresh className={styles.spinner} /> : <IoSend className={styles.sendIcon} />}
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
