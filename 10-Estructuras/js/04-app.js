const dinero = 1000;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if( dinero >= totalAPagar ){
    console.log("Si podemos pagar");
} else if(tarjeta){
    console.log("La tarjeta es válida");
} else if(cheque){
    console.log("Si tengo un cheque");
}else {
    console.log("Fondos insuficientes");
}