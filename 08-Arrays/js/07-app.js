const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400,
}

const producto2 = {
    nombre: "Celular",
    precio: 300,
}
// .push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Tablet",
    precio: 500,
}

const producto4 = {
    nombre: "Tablet2",
    precio: 5002,
}

// lo pone al principio??
carrito.unshift(producto3);

console.table(carrito);


// Eliminar ultimo elemento de un arreglo...
carrito.pop();

console.table(carrito);


// Eliminar del inicio del arreglo;

carrito.shift();

console.table(carrito);