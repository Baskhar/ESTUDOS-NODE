const fs = require("fs");

//remover arquivo
fs.unlink('arquivo.txt',function (err) {
    if(err){
        console.log(err);
        return;
    }    
    console.log('Arquivo removido');
});
