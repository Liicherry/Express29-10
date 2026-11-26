//importa o modulo express
const express = require('express');
const app = express();

//define a porta que o servidor ira escutar 
const port = 3000;

//Rota principal (GET /)
app.get('/', (req, res) => {
    //envia uma resposta JSON com a mensagem
    res.json({ mensagem: "Alô mundo!" }); // .json() ja finaliza a resposta
});

//Inicia o servidor e escuta na porta especificada
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
