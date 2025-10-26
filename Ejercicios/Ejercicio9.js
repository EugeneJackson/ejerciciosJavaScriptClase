let prompt = require('prompt-sync')();

let bachillerTitulo, examenAcceso;


console.log("===Acceso a Grado Superior===");
bachillerTitulo = prompt('¿Tienes titulo de bachiller? Di "Si" o "No": ').toLowerCase();
if (bachillerTitulo == "si") {
    console.log("Puedes entrar al Grado Superior.")
} else {
    examenAcceso = prompt('¿Tienes aprobado el examen de acceso a Grado Superior? Di "Si" o "No": ').toLowerCase();
    if (examenAcceso == "si") {
        console.log("Puedes entrar al Grado Superior.")

    } else {
        console.log('No puedes entrar al Grado Superior');
    }
}
