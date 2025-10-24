let prompt = require('prompt-sync')();

let a = prompt('Dime el valor de la variable "a": ');
let b = prompt('Dime el valor de la variable "b": ');

//Patron de intercambio:

let bTemp = b;
b = a;
a = bTemp;

console.log(`a = ${a} b = ${b}`);