const nombre = "Italo";
const precio = 20;

// Estamos creando objetos como Object Lieral

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`); 
    }
}


const producto2 = {
    nombre: "Tablet",
    precio: 3500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`); 
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
