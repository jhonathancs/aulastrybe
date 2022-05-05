const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("vamos q vamo trybe");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`);
})