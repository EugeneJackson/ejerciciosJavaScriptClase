let prompt = require('prompt-sync')();

let num1, num2;

num1 = Number(prompt('Dime el número 1: '));
num2 = Number(prompt('Dime el número 2: '));

//Comprobación de formato, si num1 y num2 es 'Not a Number', El formato de los datos es incorrecto y se para el script.
if (Number.isNaN(num1 && num2)) {
    console.log('El formato de los datos introducidos es incorrecto.')
} else {
    //Comprobación si num1 es mayor que num2.
    if (num1 > num2) {
        console.log(`El número ${num1} es mayor que el número ${num2}`);
    //Comprobación si num1 es menor que num2.
    } else if (num1 < num2) {
        console.log(`El número ${num1} es menor que el número ${num2}`);
    //Comprobación si num1 es igual a num2, si num1 !> num2 y num1 !< num2, si o si es igual.
    } else {
        console.log(`El número ${num1} es igual al número ${num2}`);
    }
}

