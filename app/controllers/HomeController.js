class HomeController{
    index(req, res){
        if(req.query.xuanquang == 'xqq'){
            res.render('home')
        }
        else {
            res.render('error')
        }
    }
}

module.exports = new HomeController