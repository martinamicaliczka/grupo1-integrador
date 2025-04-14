var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


/* GET users listing. */
router.get('/search-results', productController.results);
router.get('/:id', productController.product);
router.get('/product-add', productController.agregarProductos);
module.exports = router;
