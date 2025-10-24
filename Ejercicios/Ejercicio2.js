let prompt = require('prompt-sync')();

let num1, num2, resultado, operacion;


num1 = Number(prompt('Dime el número 1: '));
num2 = Number(prompt('Dime el número 2: '));
operacion = prompt('Dime el operador: +, -, *, /: ')

switch (operacion) {
    case '+':
        resultado = Number(num1+num2);
        console.log(`${num1} + ${num2} = ${resultado}`)
        break;
    case '-':
        resultado = Number(num1-num2);
        console.log(`${num1} - ${num2} = ${resultado}`)
        break;
    case '*':
        resultado = Number(num1*num2);
        console.log(`${num1} * ${num2} = ${resultado}`)
        break;
    case '/':
        resultado = Number.parseFloat(num1/num2);
        console.log(`${num1} / ${num2} = ${resultado}`)
        break;
}