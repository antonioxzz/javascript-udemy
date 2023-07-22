// for ( let i = 0; i < 10; i++){
    
//     if( i === 5) {
//         console.log('CINCO');
//         break;
//     }
//     console.log(`Numero: ${i}`)
// }

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tv', precio: 800 },
    { nombre: 'Celular', precio: 250 },
    { nombre: 'Antena', precio: 100 },
    { nombre: 'Tablet', precio: 350, descuento: true },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Mouse', precio: 40 },
]

for( let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento `);
        continue;
    }
    console.log(carrito[i].nombre);  
}

