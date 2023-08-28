const PictureSchema = require('../../models/Picture')

class PictureController{
    async index(req, res){
        let pictures = await PictureSchema.find({})
        console.log(pictures)
        res.render('picture', {pictures: pictures})
    }
}

module.exports = new PictureController