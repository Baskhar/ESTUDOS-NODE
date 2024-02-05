const chalk = require('chalk');
const nota = 5;



console.log(chalk.green.bold('Parabéns! Você está aprovado!'));


if(nota>=7){
    console.log(chalk.green.bold('Parabéns! Você está aprovado!'));

}else{
    console.log(chalk.bgRed.black.bold('Infelizmente você está reprovado!'));

}

