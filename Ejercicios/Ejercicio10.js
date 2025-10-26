let prompt = require('prompt-sync')();

let dia, mes, año;
let errorDetectado = false;

const meses = ["","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

dia = Number(prompt("Dime el día: "));
mes = Number(prompt("Dime el número del mes: "));
anio = Number(prompt("Dime el año: "));

if (anio <= 0 || mes < 1 || mes > 12) {
    console.log("La fecha es inválida.");
    errorDetectado = true;
} else if (mes == 2) {
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

    if (esBisiesto) {
        if (dia > 29) {
            console.log("Fecha invalida");
            errorDetectado = true;
        }
    } else {
        if (dia > 28) {
            console.log("Fecha invalida");
            errorDetectado = true;
        }
    }
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    if (dia > 30) {
        console.log(`El mes ${mes} no tiene ${dia} dias`)
        errorDetectado = true;
    }
} else {
    if (dia > 31) {
        console.log(`El mes ${mes} no tiene ${dia} dias`)
        errorDetectado = true;
    }
}

if (!errorDetectado) {
    let nombreMes = meses[mes];
    console.log(`${dia} de ${nombreMes} de ${anio}`)
}
