// for ( let i = 0; i < 10; i++){
//     console.log(`Numero: ${i}`)
// }


for ( let i = 1; i <= 20; i++) {
    if( i % 2 === 0 ){
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El numero ${i}es IMPAR`);
    }
    
}

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tv', precio: 800 },
    { nombre: 'Celular', precio: 250 },
    { nombre: 'Antena', precio: 100 },
    { nombre: 'Tablet', precio: 350 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Mouse', precio: 40 },
]

console.log( carrito.length );

for( let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i].nombre);
}