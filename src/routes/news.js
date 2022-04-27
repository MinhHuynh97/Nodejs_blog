const express =require('express');
const router= express.Router();

const newsController = require('../app/controllers/NewsController.js')

//Slug
router.use('/:slug',newsController.show)

//NewsController.index
router.use('/',newsController.index)


module.exports=router;