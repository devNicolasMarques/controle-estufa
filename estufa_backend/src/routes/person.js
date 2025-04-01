const express = require('express');
const PersonController = require('../controller/PersonController');
const router = express.Router();
router
    .get('/', PersonController.getAllPeople)
    .get('/:id', PersonController.getById)
    .post('/', PersonController.create)
    .patch('/:id', PersonController.updateById)
    .delete('/:id', PersonController.deleteById)
module.exports = router;