const express = require("express");

const app = express();

app.get('/hello', handleHelloWorldRequest);

app.listen(3002, () => {
    console.log('aplicacao ouvindo na porta 3001');
})

function handleHelloWorldRequest(req, res) {
    res.status(200).send('hello World!');
}