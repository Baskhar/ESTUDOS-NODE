const inquirer = require('inquirer');

//Cada pergunta é feita em um objeto
inquirer.prompt([
    {
        name: 'p1', 
        message: 'Qual a primeira nota',
    }, 
    {
        name: 'p2', 
        message: 'Qual é a segunda nota?',
    },
    //answers == respostas
]).then((answers) => {
    console.log(answers);
    const media =((parseInt(answers.p1)+parseInt(answers.p2))/2);
    console.log(`A média é: ${media}`);
}).catch(error => console.log(error));