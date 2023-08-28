const mongoose = require("mongoose")
const schema = mongoose.Schema

const User = new schema({
    name: { type: String, maxLength: 255},
    username: { type: String, maxLength: 255, unique: true},
    password: { type: String, maxLength: 255},
    description: { type: String},
    folder: { type: String, unique: true}
})

module.exports = mongoose.model('User', User)