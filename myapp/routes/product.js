var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


/* GET users listing. */
router.get('/search-results', productController.results);
router.get('id/:idBuscado', productController.product);
router.get('/product-add', productController.agregarProductos);
router.get('/', productController.homeProduct);
module.exports = router;
