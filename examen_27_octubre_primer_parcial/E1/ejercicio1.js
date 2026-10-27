// ============================================================
//  EJERCICIO 1 - Misiones espaciales [1,5 puntos]
//  Escribe tu solución debajo de cada apartado.
//  Solo se permite usar métodos de array. No uses bucles for/while.
// ============================================================

 const misiones = [
    {nombre: "Apollo 11", pais: "EEUU", anio: 1969, exitosa: true, tripulacion: 3},
    {nombre: "Sputnik 1", pais: "URSS", anio: 1957, exitosa: true, tripulacion: 0},
    {nombre: "Mars Climate", pais: "EEUU", anio: 1998, exitosa: false, tripulacion: 0},
    {nombre: "Vostok 1", pais: "URSS", anio: 1961, exitosa: true, tripulacion: 1},
    {nombre: "Challenger", pais: "EEUU", anio: 1986, exitosa: false, tripulacion: 7},
    {nombre: "Artemis I", pais: "EEUU", anio: 2022, exitosa: true, tripulacion: 0},
    {nombre: "Luna 9", pais: "URSS", anio: 1966, exitosa: true, tripulacion: 0},
];


// a) [0,5 puntos] ————————————————————————————————
// Filtra las misiones exitosas y devuelve solo sus nombres.
const  misiones_exitosas = misiones
    .filter(mision => mision.exitosa)
    .map(mision => mision.nombre)
console.log(misiones_exitosas);

// b) [0,5 puntos] ————————————————————————————————
// ¿Cuántos astronautas en total participaron en misiones exitosas?

const suma_astronautas = misiones.reduce((acumulador, mision) => {
    return acumulador + (mision.exitosa ? mision.tripulacion : 0)
}, 0)

console.log(suma_astronautas);


// c) [0,5 puntos] ————————————————————————————————
// Encuentra la misión más reciente de toda la lista.
// Usa reduce(). No uses sort().

const mision_reciente = misiones.reduce((acum, mision) => {
    return mision.anio > acum.anio ? mision : acum
})

console.log(mision_reciente);