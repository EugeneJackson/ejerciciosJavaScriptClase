let prompt = require('prompt-sync')();

let precioProducto, mes, precioTotal;

precioProducto = Number.parseFloat(prompt("Dime el precio del producto que va a comprar: "));
mes = Number(prompt("Dime el número del mes: "));

if (Number.isNaN(precioProducto && mes)) {
    console.log("El formato de los datos introducidos es incorrecto.");
} else {
    if (mes == 10) {
        precioTotal = precioProducto * 0.15;
        let precioTotalFormateado = precioTotal.toFixed(2);
        console.log(`El precio de ${precioProducto} con un descuento de 15% por ser octubre es de: ${precioTotalFormateado}`)
    } else {
        console.log(`El precio total de la compra es de ${precioProducto}`)
    }
}