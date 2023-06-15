// 載入 express 並建構應用程式伺服器
const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
app.use(bodyParser.json());
mongoose.connect(process.env.PJICHIPAN_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const Test = require('./models/test')

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine','hbs')

app.use('/static', express.static('public'));
// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// app.get('/result', (req, res) => {
//   res.render('result')
// })

app.post('/', (req, res) => {
  const info = req.body.info
  const myScores = req.body.myScores
  return Test.create({info , myScores})
  .then(() => res.redirect('/'))
  .catch(error => console.log(error))
})

app.listen(PORT,() =>{
  console.log(`App is running on port http://localhost:${PORT}`)
})