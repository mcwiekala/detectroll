import styles from './TextArea.module.scss'
import { IoSend } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Select from '../Select/Select'
import { useState } from 'react'

const TextArea = () => {
  const { register, handleSubmit, watch } = useForm()
  const [lang, setLang] = useState()
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
  const selectCallback = (event) => {
    event.preventDefault()
    setLang(event.target.value)
  }

  const onSubmit = () => {
    axios
      .post('/api/analyze', {
        text: searchText,
        lang,
      })
      .then((response) => {
        if (response?.data?.score) {
          navigate('/result', { state: response.data })
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
      <Select onChange={selectCallback} />
    </form>
  )
}
export default TextArea
