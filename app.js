// 載入 express 並建構應用程式伺服器
const express = require('express')
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const {Datastore} = require('@google-cloud/datastore'); // 載入google datastore


//// mongodb
// mongoose.connect(process.env.PJICHIPAN_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// const Test = require('./models/test')
// // 取得資料庫連線狀態
// const db = mongoose.connection
// // 連線異常
// db.on('error', () => {
//   console.log('mongodb error!')
// })
// // 連線成功
// db.once('open', () => {
//   console.log('mongodb connected!')
// })

//// cloud datastore
const datastore = new Datastore({
  projectId: 'dactw-dpu-ichibantest-2023',
});

// const insertInfo = info => {
//   return datastore.save({
//     key: datastore.key('visit'),
//     data: visit,
//   });
// };


// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
app.use(bodyParser.json());

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine','hbs')

app.use('/static', express.static('public'));
// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

async function InsertRecord(record){
  const kind = 'Task';
  const name = 'PJ-Ichiban_info';
  const taskKey = datastore.key([kind, name])
  const task = {
    key: taskKey,
    data: record
  };

  await datastore.save(task);
  console.log(`Saved record.`)
};

app.post('/', (req, res) => {
  const info = req.body.info
  const myScores = req.body.myScores
  const full_info = {
    'info': info,
    'myScores': myScores,
    'datetime': new Date()
  };
  console.log(full_info);
  return InsertRecord(full_info)
   .then(() => res.redirect('/'))
   .catch(error => console.log(error))
})

app.listen(PORT,() =>{
  console.log(`App is running on port http://localhost:${PORT}`)
})