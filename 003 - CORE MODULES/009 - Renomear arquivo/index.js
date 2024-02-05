const fs = require('fs');

const arAntigo = "arquivo.txt";
const arqNovo = "novo.txt";


fs.rename('arquivo.txt','novoarquivo.txt',function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log(`Arquivo renomeado ${arAntigo} foi renomeado para ${arqNovo}`);
})