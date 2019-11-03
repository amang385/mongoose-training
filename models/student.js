const mongoose = require('mongoose')
const Schema = mongoose.Schema
const student = new Schema({
    id:Number,
    firstname: String,
    lastname: String,
    age: Number,
    score: Number,
    money: Number,
    status: String,
    address: Object,
    createdatetime: Date
})

module.exports = mongoose.model('students_62672', student)