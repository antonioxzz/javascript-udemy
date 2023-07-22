function iniciarApp() {
    console.log("Iniciando app")
    segundaFuncion();
}

iniciarApp();


function segundaFuncion() {
    console.log("Desde la segunda funcion");
    usuarioAutenticado('Italo');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usario autenticado exitosamente: ${usuario}`);
}