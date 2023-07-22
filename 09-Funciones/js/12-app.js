const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tv', precio: 800 },
    { nombre: 'Celular', precio: 250 },
    { nombre: 'Antena', precio: 100 },
    { nombre: 'Tablet', precio: 350 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Mouse', precio: 40 },
]

// sin arrow function
const nuevoArreglo2 = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})


// con arrow function
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` )

carrito.forEach( producto => console.log( `${producto.nombre} - Precio: ${producto.precio}`) );



console.log(nuevoArreglo);
