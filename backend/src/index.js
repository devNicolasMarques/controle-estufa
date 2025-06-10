// Express.js é um framwork que permite a criação de um servidor HTTP.
const express = require('express'); // semelhante ao #include <express.h> em C
const app = express();// Instância do express dentro da variável app

const cors = require('cors'); // importação da biblioteca CORS(Protocolo de segurança do navegador)
app.use(cors({
    origin: '*' // Ceder acesso para quem está incluído no valor de origin, no caso * é qualquer fonte.
}));

require('./startup/routes')(app); //require -> #include -> inclusão do arquivo routes que contém as rotas do servidor HTTP

const port = 8080; // 3000 || 8080

const server = app.listen(port, () => console.log(`Listening on port ${port}`));// Inicia o servidor, permitindo "escutar" qualquer requisição enviada para o endereço do servidor;

module.exports = server;