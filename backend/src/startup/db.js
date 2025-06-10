const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste_bosch',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 3307,
});

module.exports = pool;