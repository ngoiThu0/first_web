const express = require('express')
const router = express.Router()
const pictureController = require('../../app/controllers/PictureController')

router.use('/', pictureController.index)

module.exports = router