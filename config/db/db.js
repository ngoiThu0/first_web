const mongoose = require('mongoose')

async function connect(){
   try {
        await mongoose.connect('mongodb://127.0.0.1:27017/first_web')
        .then(() => console.log('Connected!'));
   } catch (error) {
        console.log('failure!!')
   }
}

module.exports = {connect}