const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer.prompt([
    {
      name: "p1",
      message: "Qual é o seu nome?",
    },
    {
      name: "p2",
      message: "Qual é a sua idade?",
    },
  ]).then((answers) => {
    try {
        if(!answers.p1 || answers.p2){
            throw new Error("Os campos são obrigatórios");
        }
      if (typeof answers.p1 !== 'string') {
        throw new Error('Nome deve ser uma string');
      }
  
      if (typeof answers.p2 !== 'number') {
        throw new Error('Idade deve ser um número');
      }
  
      console.log(chalk.bgYellow.black(`Seja bem-vindo ${answers.p1} que possui ${answers.p2} anos`));
      //o erro disparado nos if é enviado para o catch
    } catch (error) {
      console.log(chalk.white.bgRed(`Erro: ${error.message}`));
    }
  });
  