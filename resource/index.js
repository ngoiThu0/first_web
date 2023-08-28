const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/init')
const mongoose = require('../config/db/db')
const app = express()

// setting public, views and partials folders.
console.log(path.join(__dirname, './views'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(morgan('combined')) //ghi log

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, './views/partials')
}))

// setting for template engine
app.set('view engine', 'hbs')
app.set('views', './resource/views')

//setting for database
mongoose.connect()

// routing
routes(app)



app.listen(3000)