var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


/* GET users listing. */
router.get('/search-results', productController.results);
router.get('/', productController.agregarProductos);
router.get('/agregar-producto', productController.paginaAgregar);
module.exports = router;
