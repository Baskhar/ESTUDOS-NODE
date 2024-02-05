//Importando o módulo
const http = require("http");
const fs = require('fs');

//definindo a porta
const port = 3000;

//criando servidor
const server = http.createServer((req,res)=>{
  const urlInfo = require('url').parse(req.url,true);
  const name = urlInfo.query.name;



  if(!name){
    fs.readFile('index.html',function(err,data) {
      //resumindo o header
      res.writeHead(200,{'Contenty-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  }else{
    //quebra de linha (em windows e linux)
    const nomeNewLine = name + '\r\n';
    //escrever em um arquivo
      fs.appendFile("arquivo.txt",nomeNewLine,function (err,data) {
        res.writeHead(302,{
          location: "/",
        });
        return res.end();
      });
  }
  
});
server.listen(port,()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});