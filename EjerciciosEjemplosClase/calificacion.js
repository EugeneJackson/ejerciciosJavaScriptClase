let prompt = require('prompt-sync')();

let nota = prompt('Introduzca calificación: ')

let notaNum = Number(nota);

switch (notaNum) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Suspenso')
        break;

    case 5:
    case 6:
        console.log('Suficiente')
        break;

    case 7:
    case 8:
        console.log('Notable')
        break;

    case 9:
    case 10:
        console.log ('Sobresaliente')
        break;

    default:
        console.log("La nota proporcionada no esta en el rango de calificaciónes");
        break;
}
