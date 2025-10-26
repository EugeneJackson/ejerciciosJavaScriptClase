let prompt = require('prompt-sync')();
//Inicio del script, inicialización de variables e input.
console.log("===Raiz cuadrada y Potencia===");
let userInput = Number(prompt("Dime un número: ")), raiz, potencia;

//Comprobación del tipo de dato del input.
if (Number.isNaN(userInput)) {
    console.log("El número introducido tiene un formato incorrecto.");
} else {
    //Comprobación de si el número introducido es menor o igual a 0, se para el script.
    if (userInput <= 0) {
        console.log("El número introducido no puede ser 0 o menor que 0.");
    //Si el número no es 0 o menor que 0, se hacen los calculos y se imprimen por pantalla.
    } else {
        raiz = Math.sqrt(userInput);
        potencia = Math.pow(userInput, 2);

        console.log(`Del número ${userInput}, su potencia es ${potencia} y su raiz es ${raiz}`)
        }
}