const express = require('express');
const AuthController = require('../controller/AuthController');
const router = express.Router();

router
    .post('/leitura', AuthController.register)
    .post('/login', AuthController.login)

module.exports = router;