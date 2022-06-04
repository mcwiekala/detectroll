import { perspectiveClientResponse } from './perspective/types'

const messageMap: { [key: string]: string } = {
  '1000': 'Do not insult other people!',
  '0100': "You shouldn't curse, children can see it!",
  '0010': 'Threats are criminalised!',
  '0001': 'Be more nice for others!',
  '1100': 'Take care about your language!',
  '1010': 'Insulting will not make people fear you more!',
  '1001': 'Others may feel threatened by your words!',
  '0110': 'Cursing will not make your threats more serious!',
  '0101': 'Work on your own behaviour!',
  '0011': 'Other people may have a worse rest of the day!',
}

const generateMessageCode = (result: perspectiveClientResponse) => {
  const messageCode: string = result.attributes.reduce((prev, curr) => {
    return (prev += curr.value >= 0.7 ? '1' : '0')
  }, '')
  return messageCode
}

export const handleMessage = (result: perspectiveClientResponse) => {
  let messageCode = generateMessageCode(result)
  if (messageCode.length < 4) {
    messageCode = '000' + messageCode
  }
  if (messageMap.hasOwnProperty(messageCode)) {
    result.message = messageMap[messageCode]
  } else {
    result.message = undefined
  }
  return result
}
