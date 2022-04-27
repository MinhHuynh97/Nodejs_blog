const express =require('express');
const router= express.Router();

const siteController = require('../app/controllers/SiteController.js')

//Slug
router.use('/search',siteController.search)

//NewsController.index
router.use('/',siteController.index)


module.exports=router;