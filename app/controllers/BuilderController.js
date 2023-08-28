class BuilderController {
    index(req, res){
        res.render('builder')
    }
}

module.exports = new BuilderController