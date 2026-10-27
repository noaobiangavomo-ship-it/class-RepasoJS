// ============================================================
//  EJERCICIO 5 - Encuentra y corrige el error [1,5 puntos]
//  Para cada fragmento:
//    · Di qué imprime / qué ocurre realmente
//    · Explica por qué está mal
//    · Escribe la línea o líneas corregidas en el espacio indicado
// ============================================================


// — Frag. A) [0,5 puntos] ———————————————————————————————
// Objetivo: crear 3 funciones que devuelvan 0, 1 y 2 respectivamente.

function crearFunciones() {
     const fns = [];
    for (var i = 0; i < 3; i++) {
       fns.push(() => i);
    }
    return fns;
}

const fns = crearFunciones();
console.log(fns[0]()); // Se espera 0
console.log(fns[1]()); // Se espera 1
console.log(fns[2]()); // Se espera 2

// ¿Qué imprime realmente?
//   fns[0]() → 3
//   fns[1]() → 3
//   fns[2]() → 3
// ¿Por qué? por que en la funcion 
// Corrección (escribe la línea que hay que cambiar y cómo):


//   ######################################################
// — Frag. B) [0,5 puntos] ———————————————————————————————
// Objetivo: filtrar solo los números mayores que 2.

const numeros = [1, 2, 3, 4, 5];
const mayores = numeros.filter(n => {
    n > 2
});
console.log(mayores);


// ¿Qué devuelve realmente? ___________
// ¿Por qué? _______________________________________________
// Corrección:
//   _______________________________________________


//   ######################################################
// — Frag. C) [0,5 puntos] ———————————————————————————————
// Objetivo: sumar todos los salarios. Debe devolver 0 si el array está vacío.

const conDatos = [2800, 3200, 2600];
const sinDatos = [];

const total = conDatos.reduce((acc, sal) => acc + sal);
const totalVacio = sinDatos.reduce((acc, sal) => acc + sal);
console.log(totalVacio);
console.log(total);
// conDatos funciona: 8600
// sinDatos: se espera 0

// ¿Qué ocurre con sinDatos? que nos devuelve un array sin elementos
// ¿Por qué? por que el array esta vacio
// Corrección:


