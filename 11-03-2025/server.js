const express = require('express'); 

const app = express();

app.length('/', (req, res) => {
    res.send('Olá Mundo!')
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});