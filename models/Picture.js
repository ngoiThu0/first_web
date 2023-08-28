const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Picture = new Schema({
    name: { type: String, maxLength: 255},
    belongTo: { type: String, maxLength: 255},
    description: { type: String},
    path: { type: String, unique: true}
})

module.exports = mongoose.model('Picture', Picture)