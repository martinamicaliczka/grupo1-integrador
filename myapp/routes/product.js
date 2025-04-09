var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

/* GET users listing. */
router.get('/search-results/:search', productController.results);
module.exports = router;
