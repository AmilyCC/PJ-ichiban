const mongoose = require('mongoose')
const Schema = mongoose.Schema
const testSchema = new Schema({
  info: {
    name: {
      type: String, 
      required: true // 這是個必填欄位
    },
    gender: {
      type: String,
      required: false 
    },
    age: {
      type: Date, 
      required: false 
    },
    phone: {
      type: String, 
      required: false 
    },
    email: {
      type: String, 
      required: false 
    },
  },
  myScores: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Test', testSchema)