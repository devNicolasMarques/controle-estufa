const express = require('express');
const person = require('../routes/person');


module.exports = function (app) {
    app.use(express.json());
    app.use('/api/person', person);
}