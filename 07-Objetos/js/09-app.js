"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal( producto );

producto.disponible = false;
// se puede modificar lo existente, pero no agregar ni eliminar funcionalidades
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));

