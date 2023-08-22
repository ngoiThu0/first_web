class PictureController{
    index(req, res){
        res.render('picture')
    }
}

module.exports = new PictureController