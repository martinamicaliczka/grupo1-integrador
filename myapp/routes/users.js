var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/login', userController.login);
router.post('/login', userController.loginProcess);
router.get('/logout', userController.logout);
router.get('/register', userController.register);
router.post('/register', userController.create);
router.get('/profile', userController.profile);
router.get('/profile-edit', userController.edit);
router.get('/:user', userController.public);
module.exports = router;
