//Importando o módulo
const http = require("http");

//definindo a porta
const port = 3000;

//criando servidor
const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true);
    const name = urlInfo.query.name;

    //informar que a conexão foi bem sucessida com o codigo de status 200
    res.statusCode = 200;
    //permitir retornar html
    res.setHeader('contenty-Type','text/html');
    //se for vazio
    if(!name){
        res.end('<h1> Preencha o seu nome: </h1><form method = "GET"><input type="text" name="name"/><input type="submit" value="Enviar"></form>')
    }else{
        res.end(`<h1> Seja bem vindo ${name}!</h1>`);
    }
})
server.listen(port,()=>{
    console.log(`Servidor rodando na porta: ${port}`);
})