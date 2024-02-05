// Importando o módulo
const http = require("http");

// Definindo a porta
const port = 3000;

// Criando servidor
const server = http.createServer((req, res) => {
    // Informar que a conexão foi bem-sucedida com o código de status 200
    res.statusCode = 200;
    // Permitir retornar HTML e configurar o charset para UTF-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1> Olá, Este é o meu primeiro servidor com HTML! </h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
