const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tv', precio: 800 },
    { nombre: 'Celular', precio: 250 },
    { nombre: 'Antena', precio: 100 },
    { nombre: 'Tablet', precio: 350 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Mouse', precio: 40 },
]


for(let i = 0; i < carrito.length; i++){
    console.log( `${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// Array method

carrito.forEach( function(producto) {
    console.log( `${producto.nombre} - Precio: ${producto.precio}`);
})