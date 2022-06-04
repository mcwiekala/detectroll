import styles from './TextArea.module.scss'
import { IoSend } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const TextArea = () => {
  const { register, handleSubmit, watch } = useForm()
  const searchText = watch('messageText')
  const navigate = useNavigate()
  const data = [
    {
      name: 'insult',
      value: 0.59346044,
    },
    {
      name: 'profanity',
      value: 0.7039542,
    },
    {
      name: 'threat',
      value: 0.021160208,
    },
    {
      name: 'toxicity',
      value: 0.97926265,
    },
  ]
  const onSubmit = () => {
    navigate('/result', { state: data })
    axios
      .post('/api/analyze', {
        text: searchText,
        lang: 'en',
      })
      .then((response) => {
        if (response?.data?.score) {
          navigate('/result', { data: response.data })
        }
      })
      .catch((error) => console.error(error))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.textAreaContainer}>
      <textarea className={styles.textArea} placeholder="type some text to check" {...register('messageText')}></textarea>
      <button type="submit" className={styles.sendIconContainer}>
        <IoSend className={styles.sendIcon} />
      </button>
    </form>
  )
}
export default TextArea
