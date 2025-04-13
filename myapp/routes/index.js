var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/register', indexController.register);
router.get('/login', indexController.login);
router.get('/logout', indexController.logout);
module.exports = router;
