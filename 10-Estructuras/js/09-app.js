const autenticado = true;
const puedePagar = true;


console.log( autenticado || puedePagar ? 'Si puede pagar': 'No está autenticado' );

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
totalPagar = 600;

if( efectivo > totalPagar ||credito > totalPagar || dispobile > totalPagar){
    if( efectivo > totalPagar ){
        console.log('Si pagaste con efectivo')
    }else {
        console.log('Otra forma de pago')
    }
} else {
    console.log('Fondos insuficientes')
}