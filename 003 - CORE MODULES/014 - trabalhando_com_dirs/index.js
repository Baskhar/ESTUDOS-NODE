const fs = require("fs");


//se diretório não existe
if(!fs.existsSync('./minhapasta')){
    console.log("Não existe essa pasta no diretório");
    //criandoa a pasta
fs.mkdirSync("minhapasta");
}


//se diretório  existe
if(fs.existsSync('./minhapasta')){
    console.log("Existe essa pasta no diretório");
}