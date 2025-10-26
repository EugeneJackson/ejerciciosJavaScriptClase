let prompt = require('prompt-sync')();


console.log("===Par o impar===")
let userInput = Number(prompt("Dime un número: "));

if (Number.isNaN(userInput)) {
    console.log("El formato de los datos introducidos es incorrecto.");
} else {
    if (userInput == 0) {
        console.log(`El numero ${userInput} no es par ni impar.`)
    } else {
        if (userInput % 2 == 0) {
        console.log(`El número ${userInput} es par.`);
        } else {
        console.log(`El número ${userInput} es impar.`)
      }   
    }
    
}