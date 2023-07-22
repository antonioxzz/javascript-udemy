const producto = "Monitor 20 Pulgadas";

// .repeat repetir una cadena de texto

const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split, dividir un string

const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS #Moderno";
console.log(tweet.split('#'))