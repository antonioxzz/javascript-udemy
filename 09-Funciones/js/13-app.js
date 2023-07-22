
const reproductor = {
    cancion: '',

    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}s`),
    
    pausar: () => console.log(`Pausando...`),

    borrar: () => console.log(`Borrando cancion... ${id}...`),

    crearPlaylist: nombre =>console.log(`Creando la Playlist de ${nombre}`),

    reproducirPlaylist: nombre =>console.log(`Reproduciendo la Playlist ${nombre}`),

    set NuevaCacion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },

    get ObtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.NuevaCacion = 'Enter Sandman';
reproductor.ObtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Pop');
reproductor.reproducirPlaylist('Rock')

