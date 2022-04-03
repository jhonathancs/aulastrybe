const mysql = require('mysql2/promise');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'model_database',
    password: 'Trybe.123456',
    port: 3306 
});