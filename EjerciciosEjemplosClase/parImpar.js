var prompt = require('prompt-sync')();

numero = Number(prompt('Dime un número: '));

console.log('Resto del valor ' + numero + ' dividido entre 2 = ' + numero % 2);

if (numero % 2 == 0) {
    console.log('El número' + numero + ' es Par');
}
else {
    console.log('El número ' + numero + ' es Impar')
}