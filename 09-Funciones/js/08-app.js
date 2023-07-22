function sumar(a, b) {
    return a + b ;
}

const resultado = sumar(3, 2);

console.log(resultado);


// Ejemplo mas avanzado

let total = 0;
let impuesto = 1.12;

function agregarCarrito(precio) {
    return total += precio;
}


function calcularImpuesto(total) {
    return total * impuesto;
}


agregarCarrito(300);
agregarCarrito(600);
agregarCarrito(100);

const totalPagar = calcularImpuesto(total)

console.log(`El total a pagar es: ${totalPagar}`)

console.log(total);