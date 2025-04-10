var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


/* GET users listing. */
router.get('/search-results', productController.results);
router.get('id/:idBuscado', productController.product);
router.get('/product-addo', productController.agregarProductos);
router.get('/page-add', productController.paginaAgregar)
module.exports = router;
