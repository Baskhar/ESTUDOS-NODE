//Informações do S.0
const os = require('os');

//quantas cpus tem no server
console.log(os.cpus());

//Quanto de memoria livre tem na máquina
console.log(os.freemem());

//qual diretorio da home(dir principal)
console.log(os.homedir());

//qual o tipo de S.O que está rodando na máquina
console.log(os.type());