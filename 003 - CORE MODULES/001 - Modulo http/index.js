//Importando o módulo
const http = require("http");

//definindo a porta
const port = 3000;

//criando servidor
const server = http.createServer((req,res)=>{
    //respondendo a requisição
    res.write('Oi HTTP');
    //encenrrando a resposta da requisição
    res.end();
})
server.listen(port,()=>{
    console.log(`Servidor rodando na porta: ${port}`);
})