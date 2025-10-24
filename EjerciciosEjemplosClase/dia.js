let nombreDia = 0;
var prompt = require('prompt-sync')();

numDia = Number(prompt("Dime el número del dia 1-7: "))

switch (numDia) {
    case 1:
        nombreDia = "Lunes";
        break;

    case 2:
        nombreDia = "Martes"
        break;
    case 3:
        nombreDia = "Miercoles"
        break;
    case 4:
        nombreDia = "Jueves"
        break;
    case 5:
        nombreDia = "Viernes"
        break;
    case 6:
        nombreDia = "Sábado"
        break;
    case 7:
        nombreDia = "Domingo"
        break;
    default:
        console.log("El dato proporcionado no es correcto.")
        break;
}

console.log(nombreDia);
