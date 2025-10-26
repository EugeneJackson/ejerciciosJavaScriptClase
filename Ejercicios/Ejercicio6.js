let prompt = require('prompt-sync')();

let numNinos, numNinas, porcentajeNinos, porcentajeNinas, total;

numNinos = Number(prompt("Dime el número de ninos: "));
numNinas = Number(prompt("Dime el número de ninas: "));
total = numNinos + numNinas;

if (Number.isNaN(numNinos && numNinas)) {
    console.log("El formato de los datos introducidos es incorrecto.");
} else {
    porcentajeNinos = (numNinos/total)*100;
    porcentajeNinas = (numNinas/total)*100;

    let porcentajeFormateadoNinos = porcentajeNinos.toFixed(2);
    let porcentajeFormateadoNinas = porcentajeNinas.toFixed(2);

    console.log(`El porcentaje del número de Ninos es ${porcentajeFormateadoNinos}% y el porcentaje del número de Ninas es ${porcentajeFormateadoNinas}%`)

}


