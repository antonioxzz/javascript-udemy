
const reproductor = {
    reproducir: function(id) { // metodos de propiedad
        console.log(`Reproduciendo cancion con el id ${id}...`);
    },
    pausar: function() {
        console.log(`Pausando...`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Pop');
reproductor.reproducirPlaylist('Rock')

