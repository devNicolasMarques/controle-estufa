const express = require('express'); // Inclui as funções do express no código
const sensorRoutes = require('../routes/sensors'); //incluir o arquivo de gerenciamento e rotas.

//localhost:8080/api/sensors
module.exports = function (app) { // declaração da função que irá gerenciar o nome das rotas
    app.use(express.json()); //middleware para validação e uso do .json
    app.use('/api/sensors', sensorRoutes); //Definição da rota /api/sensors para chamada
};