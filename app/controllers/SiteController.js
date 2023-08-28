class SiteController{

    slug(req, res){
        console.log(req.params.slug)
        if(req.params.slug === '/login'){
            this.login(req, res)
        }
    }
    home(req, res){
        if(req.query.xuanquang == 'xqq'){
            res.render('home')
        }
        else {
            res.render('home')
        }
    }
    login(req, res){
        if(req.query.xuanquang == 'xqq'){
            res.render('login')
        }
        else {
            res.render('login')
        }
    }
}

module.exports = new SiteController