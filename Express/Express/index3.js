//Importa o modulo Express
const express = require('express');
const app = express();

//Middleware para interpretar dados enviados por formularios (POST)
app.use(express.urlencoded({ extended: true }));

//Lista inicial de tarefas
let tarefas = [
    { tarefa: "compilar" },
    { tarefa: "testar" }
];

//Função que retorna a pagina HTML como string
const getPagina = () => {
    let conteudo = "<html><body>";

    //Formulario para adicionar nova tarefa
    conteudo += "<form method='post'>";
    conteudo += "<input type='text' name='tarefa' placeholder='Tarefa'>";
    conteudo += "<input type='submit' value='Adicionar'>";
    conteudo += "</form>";

//Lista de tarefas
conteudo += "<ul>";
for (let t of tarefas) {
    conteudo += `<li>${t.tarefa}</li>`;
}
conteudo += "</ul>";

conteudo += "</body></html>";
return conteudo;
};

//Rota GET para exibir a pagina
app.get(['/', '/web/tarefas'], (req, res) => {
  res.status(200)
  .contentType('text/html')
  .send(getPagina());
});

//Rota POST para adicionar nova tarefa
app.post(['/', '/web/tarefas'], (req,res) => {
    //Adiciona a nova tarefa a lista, se não estiver vazia
    if (req.body.tarefa && req.body.tarefa.trim() !== ""){
        tarefas.push({ tarefa: req.body.tarefa.trim() });
    }

    //Reexibe a pagina com a nova tarefa incluida
    res.status(200)
        .contentType('text/html')
        .send(getPagina());
});

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

