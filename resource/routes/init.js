const homeRouter = require('./home.js')
const pictureRouter = require('./picture.js')
const userRouter = require('./user.js')
const buildRouter = require('./builder.js')
const siteRouter = require('./site.js')

function routes (app){
    // app.get('/home', (req, res) =>{
    //     res.render('home')
    // })
    app.use('/picture', pictureRouter)

    app.use('/user', userRouter)

    app.use('/builder', buildRouter)

    app.use('/', siteRouter)
    
    // app.get('/user', (req, res) => {    
    //     res.render('home')
    // })
    
    // app.get('/picture', (req, res) =>{
    //     res.render('picture')
    // })
}

module.exports = routes