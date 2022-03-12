const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/test',(_req,res) =>{
    res.json('hello world');
});

const langs = ['html', 'css', 'javascript', 'React'];

app.get('/langs', (req,res)=>{
    res.send(langs);
});

app.post('/langs', (req, res) => {
    const { name } = req.body;
    langs.push(name);
    res.send(`linguagem ${name}  adicionada com sucesso!`)
});

app.listen(3000,() =>{
    console.log("app esta rodando normal na porta 3000")
});