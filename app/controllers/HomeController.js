class HomeController{
    index(req, res){
        if(req.query.xuanquang == 'xqq'){
            res.render('home')
        }
        else {
            res.render('home')
        }
    }
}

module.exports = new HomeController