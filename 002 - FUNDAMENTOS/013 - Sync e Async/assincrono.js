const fs = require("fs");

console.log('Inicio');

fs.writeFile("arquivo2.txt","olá",function (err) {
    setTimeout(() => {
        console.log('Arquivo Criado');
    }, 1000);
});

console.log("Fim");