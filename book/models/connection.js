const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Trybe.123456',
    database: 'books' });

module.exports = connection;