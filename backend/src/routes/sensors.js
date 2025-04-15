const express = require('express');
const router = express.Router();
const SensorController = require('../controllers/SensorController');

// Rota para criar novos dados de sensores
router.post('/', SensorController.create);

// Rota para obter todos os dados de sensores
router.get('/', SensorController.getAll);

// Rota para obter os dados mais recentes dos sensores
router.get('/latest', SensorController.getLatest);

// Rota para deletar dados de sensores por ID
router.delete('/:id', SensorController.deleteById);

module.exports = router;