const mongoose = require("mongoose")
const schema = mongoose.Schema

const User = new schema({
    name: { type: String, maxLength: 255, require: true},
    username: { type: String, maxLength: 255, unique: true, require: true},
    password: { type: String, maxLength: 255, require: true},
    description: { type: String},
    folder: { type: String, unique: true}
})

module.exports = mongoose.model('User', User)