const express = require('express'); // chamada do framework express para uso das funcionalidades
const router = express.Router(); //permite o roteamento usando a rota definida no arquivo routes.js
const SensorController = require('../controllers/SensorController'); // importa  arquivo de controller(que é onde as funções com a regra de negócio estão)

//http://localhost:8080/api/sensors
// Rota para criar novos dados de sensores
router.post('/', SensorController.create); // post -> enviar dados para api -> body -> { "nome": "Nicolas", "sobrenome": "Marques"}

// Rota para obter todos os dados de sensores
router.get('/', SensorController.getAll); //get comum -> buscar dados por meio deste endpoint

// Rota para obter os dados mais recentes dos sensores
router.post('/teste', SensorController.sensorTest); 

// Rota para deletar dados de sensores por ID
router.delete('/:id', SensorController.deleteById); //get com params -> é quando o get possui "/:params"

module.exports = router;