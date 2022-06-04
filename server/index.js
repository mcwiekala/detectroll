require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const jsonData = require('./resources/sample-response.json')
const perspective = require('./perspective')

const app = express()

app.use(express.static(path.join(__dirname + '/public')))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.get('/api/message', (req, res) => {
  res.send('HELLO WORLD!')
})

app.get('/api/json', (req, res) => {
  const jsonData = require('./resources/sample-response.json')
  res.send(jsonData)
})

app.get('/api/secret', (req, res) => {
  const secret = process.env.SECRET
  res.send(secret)
})
app.post('/api/analyze', async (req, res) => {
  perspective(req, res)
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`)
})
