const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question('Qual a sua linguagem preferida? ',(langague)=>{
    if(langague === "Python"){
        console.log("Muito bom!!!");
    }else{
        console.log(`A minha linguagem preferida é: ${langague}`);
    }
   
    readline.close();
});