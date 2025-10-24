var prompt = require('prompt-sync')();

let edad = Number(prompt('Introduzca la edad:'));
console.log(typeof(edad));
console.log(edad);

if (edad >= 18) {
    //let define la variable como ámbito bloque, es decir 
    //carnet sólo va a vivir en memoria mientras
    //se ejecuta el código del bloque donde se define.
    let carnet = prompt ('Tienes carnet?(S/N)');

    if (carnet === 'S') {
        console.log('Pueden conducir');
    }
    else {
        //En otro caso
        console.log('No puedes conducir');
    }
}
else {
    console.log("No puedes conducir");
}
