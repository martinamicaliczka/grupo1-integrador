var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


/* GET users listing. */
router.get('/search-results', productController.results);
router.get('/product-add', productController.agregarProductos);
router.get('/:id', productController.product);
router.post('/:id/comentario', productController.nuevoComentario);
router.post('/product-add', productController.guardarProductos);

module.exports = router;
