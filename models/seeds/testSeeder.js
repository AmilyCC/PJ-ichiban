const mongoose = require('mongoose')
const Test = require('../test') // 載入 todo model
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.PJICHIPAN_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Test.create({
    info: {
      name: "DAC",
      gender: "女",
      age: 25,
      phone: "0987654321",
      email: "dac@dactp.com.tw",
    },
    myScores: 7
  })
  console.log('done')
})