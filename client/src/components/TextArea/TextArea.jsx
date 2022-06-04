import styles from './TextArea.module.scss'
import { IoSend } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const TextArea = () => {
  const { register, handleSubmit, watch } = useForm()
  const searchText = watch('messageText')
  const onSubmit = () => {
    axios
      .post('/api/analyze', {
        text: searchText,
        lang: 'en',
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} class={styles.textAreaContainer}>
      <textarea class={styles.textArea} placeholder="type some text to check" {...register('messageText')}></textarea>
      <button type="submit" class={styles.sendIconContainer}>
        <IoSend class={styles.sendIcon} />
      </button>
    </form>
  )
}
export default TextArea
