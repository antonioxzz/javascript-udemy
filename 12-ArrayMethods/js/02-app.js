const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
    if(mes === 'Febrero'){
        console.log(`Encontrado en el indice ${index}`)
    }
})


// Encontrar el indice de abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice)

const indice2 = meses.findIndex(mes => mes === 'Diciembre');
    if (indice2 == -1) {
        console.log("El mes no ha sido encontrado")
    }


// Encontrar un indice de un arreglo de objetos
const indice3 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice3)
