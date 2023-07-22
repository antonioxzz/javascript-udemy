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


const producto3 = {
    nombre: "Tablet",
    precio: 500,
}

// forma declarativa

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3,...resultado];



console.table(resultado);



