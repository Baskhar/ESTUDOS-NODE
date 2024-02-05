const x =  10;

// Checar se X é um número

// if(!Number.isInteger(x)){
//     throw new Error("O valor de X não é um número inteiro!");
// }



try {
    x = 2;
} catch (error) {
    console.log(`Error: ${error}`)
}
console.log("Continuando código...");