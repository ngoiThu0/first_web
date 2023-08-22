const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/init')
const app = express()


console.log(path.join(__dirname, './views'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(morgan('combined')) //ghi log

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutDir: path.join(__dirname, 'views/layouts'),
  partialsDir: [path.join(__dirname, 'views/partials')]
}))

app.set('view engine', 'hbs')
app.set('views', './resource/views')

routes(app)

app.listen(3000)