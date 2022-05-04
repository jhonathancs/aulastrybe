const express = require('express');
require('dotenv').config();

const app = express();
// adiciona leitura da variável de ambiente
const PORT = process.env.PORT || 3000;

app.use('/', (_req, res) => res.send('<h1>Hello World</h1>'));

app.listen(PORT);