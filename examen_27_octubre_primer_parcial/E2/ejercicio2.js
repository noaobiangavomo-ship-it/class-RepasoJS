// ============================================================
//  EJERCICIO 2 - Playlist [2 puntos]
//  Escribe tu solución debajo de cada apartado.
//  Solo se permite usar métodos de array. No uses bucles for/while.
// ============================================================

const playlist = [
    {titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354, genero: "rock", reproducciones: 2100000},
    {titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200, genero: "pop", reproducciones: 3800000},
    {titulo: "Smells Like Teen", artista: "Nirvana", duracion: 301, genero: "rock", reproducciones: 1500000},
    {titulo: "Shape of You", artista: "Ed Sheeran", duracion: 234, genero: "pop", reproducciones: 4200000},
    {titulo: "Hotel California", artista: "Eagles", duracion: 391, genero: "rock", reproducciones: 980000},
    {titulo: "As It Was", artista: "Harry Styles", duracion: 167, genero: "pop", reproducciones: 3600000},
    {titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482, genero: "rock", reproducciones: 1200000},
];

// a) [0,75 puntos] ———————————————————————————————
// Crea un nuevo array donde cada canción tenga: título, artista
// y un campo "favorita" que sea true si supera los 2.000.000
// de reproducciones, o false si no.
// Usa map().
const cancionesConFavorita = playlist.map(cancion => ({
    titulo: cancion.titulo,
    artista: cancion.artista,
    favorita: cancion.reproducciones > 2000000,
}));
console.log(cancionesConFavorita);

// b) [0,75 puntos] ———————————————————————————————
// Calcula el total de reproducciones del género "rock"
// y muéstralo con este formato exacto:
// "Total rock: 5.780.000 reproducciones"
// Pista: valor.toLocaleString("es-ES") convierte 5780000 → "5.780.000"
const totalRock = playlist
    .filter(cancion => cancion.genero === "rock")
    .reduce((total, cancion) => total + cancion.reproducciones, 0);

console.log(totalRock);
console.log(`Total rock: ${totalRock.toLocaleString("es-ES")} reproducciones`);


// c) [0,5 puntos] ————————————————————————————————
// Agrupa las canciones por género usando reduce().
// El resultado debe ser un objeto donde cada clave es un género
// y su valor es un array con los títulos de ese género.
// Resultado esperado:
// {
//   rock: ["Bohemian Rhapsody", "Smells Like Teen", "Hotel California", "Stairway to Heaven"],
//   pop:  ["Blinding Lights", "Shape of You", "As It Was"]
// }
const cancionesPorGenero = playlist.reduce((grupos, cancion) => {
    if (!grupos[cancion.genero]) {
        grupos[cancion.genero] = [];
    }

    grupos[cancion.genero].push(cancion.titulo);
    return grupos;
}, {});


console.log(cancionesPorGenero);
