const path = require("path");

//path ABSOLUTO
console.log(path.resolve('teste.txt'));


//formar path
const midFolder = "relatorios";
const fileName = "walysson";



const finalPath = path.join("/","arquivos",midFolder,fileName);

console.log(finalPath);