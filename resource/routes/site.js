const express = require('express')
const router = express.Router()
const siteController = require('../../app/controllers/SiteController')

router.use('/:slug', siteController.login)

router.use('/', siteController.home)

module.exports = router