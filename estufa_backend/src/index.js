const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

require('./startup/routes')(app);


const port = 8080;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;