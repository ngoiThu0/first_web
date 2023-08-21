const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.get('/', (req, res) => {    
  res.send('<h> xuanquang </h>')
})

app.get('/info', (req, res) =>{
  res.send('<div id="nav"> <ul class="nav-tabs"> <li> <i class="fa-solid fa-house"></i> <a href="#home"></a>Home </li> <li><a href="#about"></a>About</li> <li><a href="#category"></a>Category</li> <li><a href="#setting"></a>Setting</li> <li><a href="#login"></a>Log in</li> </ul> </div>')
})

app.listen(3000)