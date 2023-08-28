class UserController{
    index(req, res){
        res.render('user')
    }
    show(req, res){
        res.send('<h1> Xunauqnag</h1>')
    }
}

module.exports = new UserController