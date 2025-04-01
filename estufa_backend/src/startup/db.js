const mysql = require('mysql2/promise');

// Configuração da conexão
const pool = mysql.createPool({
    host: 'localhost',   // Altere se o banco estiver em outro host
    user: 'root',        // Seu usuário do MySQL
    password: '',        // Sua senha do MySQL
    database: 'meubanco', // Nome do banco de dados
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;