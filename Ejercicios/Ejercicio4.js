//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
let prompt = require('prompt-sync')();

let num1, num2, num3, resultado;

num1 = Number(prompt('Dime el primer número: '));
num2 = Number(prompt('Dime el segundo número: '));
num3 = Number(prompt('Dime el tercer número: '));

if (Number.isNaN(num1 && num2 && num3)) {
    console.log('El formato de los datos introducidos no es correcto.');
} else {
    if (num1 < 0) {
        resultado = num1*num2*num3;
        console.log(`El producto de ${num1} * ${num2} * ${num3} = ${resultado}`);
    } else {
        resultado = num1+num2+num3;
        console.log(`La suma de ${num1} + ${num2} + ${num3} = ${resultado}`);
    }
}
