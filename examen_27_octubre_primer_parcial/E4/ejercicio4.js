// ============================================================
//  EJERCICIO 4 — El Clásico  [2 puntos]
//  Escribe tu solución debajo de cada apartado.
//  Solo se permite usar métodos de array. No uses bucles for/while.
// ============================================================

// FC Barcelona 1-2 Real Madrid
// Doblete de Mbappé (min. 41 y 87). Gol de Raphinha (min. 61, asistencia de Pedri).

const jugadores = [
    {nombre: "Mbappé", equipo: "Real Madrid", titular: true, minutos: 94, goles: 2, asistencias: 0, tarjeta: true},
    {nombre: "Camavinga", equipo: "Real Madrid", titular: false, minutos: 14, goles: 0, asistencias: 1, tarjeta: false},
    {nombre: "Bellingham", equipo: "Real Madrid", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Valverde", equipo: "Real Madrid", titular: true, minutos: 62, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Huijsen", equipo: "Real Madrid", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: true},
    {nombre: "Raphinha", equipo: "Barcelona", titular: true, minutos: 86, goles: 1, asistencias: 0, tarjeta: false},
    {nombre: "Pedri", equipo: "Barcelona", titular: true, minutos: 90, goles: 0, asistencias: 1, tarjeta: false},
    {nombre: "Rodri", equipo: "Barcelona", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Yamal", equipo: "Barcelona", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Gordon", equipo: "Barcelona", titular: true, minutos: 85, goles: 0, asistencias: 0, tarjeta: true},
];


// a) [0,5 puntos] ————————————————————————————————
// Usa reduce() para obtener el marcador final del partido.
// Resultado esperado: { "Real Madrid": 2, "Barcelona": 1 }

const marcador = jugadores.reduce((resultado, jugador) => {
    resultado[jugador.equipo] += jugador.goles;
    return resultado;
}, {"Real Madrid": 0, "Barcelona": 0});

console.log(marcador);
console.log("Marcador Final:", marcador);


// b) [0,5 puntos] ————————————————————————————————
// Devuelve un ranking de participaciones (goles + asistencias)
// ordenado de mayor a menor. Incluye solo jugadores con al menos 1.
// Usa map() y sort().
// Resultado esperado:
// [
//   { nombre: "Mbappé",    participaciones: 2 },
//   { nombre: "Camavinga", participaciones: 1 },
//   { nombre: "Raphinha",  participaciones: 1 },
//   { nombre: "Pedri",     participaciones: 1 },
// ]
const ranking = jugadores
    .map(jugador => ({
        nombre: jugador.nombre,
        participaciones: jugador.goles + jugador.asistencias,
    }))
    .filter(jugador => jugador.participaciones >= 1)
    .sort();

console.log(ranking);


// c) [0,5 puntos] ————————————————————————————————
// ¿Todos los titulares del Real Madrid terminaron sin tarjeta amarilla?
// Usa filter() y/o every().
// Resultado esperado: "[boolean] porque [nombreJugador] vio tarjeta"
const titularesRealMadrid = jugadores.filter(jugador =>
    jugador.equipo === "Real Madrid" && jugador.titular
);
const todosSinTarjeta = titularesRealMadrid.every(jugador => !jugador.tarjeta);
const jugadorConTarjeta = titularesRealMadrid.find(jugador => jugador.tarjeta);

console.log(`${todosSinTarjeta} porque ${jugadorConTarjeta.nombre} vio tarjeta`);
console.log(titularesRealMadrid);

// d) [0,5 puntos] ————————————————————————————————
// Para cada jugador que haya marcado al menos un gol,
// calcula sus "goles por 90 minutos" (redondeado a 2 decimales).
// Fórmula: (goles / minutos) * 90
// Usa filter() y/o map().
// Resultado esperado:
// [
//   { nombre: "Mbappé", golesPor90: 1.91 },
//   ...
// ]
const golesPor90 = jugadores
    .filter(jugador => jugador.goles > 0)
    .map(jugador => ({
        nombre: jugador.nombre,
        golesPor90: Number(((jugador.goles / jugador.minutos) * 90).toFixed(2)),
    }));

console.log(golesPor90);

