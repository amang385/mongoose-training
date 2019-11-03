const mongoose = require('mongoose')
const Schema = mongoose.Schema
const person = new Schema({
    firstname: String,
    lastname: String,
    createdatetime: Date
})

module.exports = mongoose.model('persons', person)