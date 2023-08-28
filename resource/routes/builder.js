const express = require('express')
const router = express.Router()
const builderController = require('../../app/controllers/BuilderController')

router.use('/', builderController.index)

module.exports = router