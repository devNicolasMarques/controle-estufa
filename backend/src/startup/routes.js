const express = require('express');
const person = require('../routes/person');
const sensorRoutes = require('../routes/sensors');

//localhost:8080/api/person
module.exports = function (app) {
    app.use(express.json());
    app.use('/person', person);
    app.use('/api/sensors', sensorRoutes);
};