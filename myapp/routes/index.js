var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', indexController.index);
module.exports = router;
