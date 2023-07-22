const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas : {
        peso: '1kg',
        medida: '1m'
        
        },
        fabricacion: {
        pais: 'ecuador',     
        }
    }
}


const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(fabricacion);
console.log(informacion);
console.log(pais);



