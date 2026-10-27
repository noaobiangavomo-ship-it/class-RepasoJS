// ============================================================
//  EJERCICIO 3 - Closure: cronómetro [1,5 puntos]
//  Escribe tu solución debajo del enunciado.
// ============================================================

// Crea una función "crearCronometro" usando un closure.
// No recibe parámetros y devuelve un objeto con estos métodos:
//
//   · iniciar()    → arranca el cronómetro desde donde estaba.
//                    Si ya está en marcha: muestra "El cronómetro ya está en marcha."
//
//   · pausar()     → pausa el cronómetro.
//                    Si ya está pausado: muestra "El cronómetro ya está pausado."
//
//   · sumar(seg)   → añade segundos al tiempo acumulado.
//                    Solo funciona si está pausado (si está en marcha, no hace nada).
//
//   · reiniciar()  → pone el tiempo a 0 y lo pausa.
//
//   · get tiempo() → devuelve el tiempo acumulado en segundos.
//
// El tiempo NO debe ser accesible ni modificable desde fuera
// salvo a través de los métodos anteriores.

function crearCronometro() {
	let tiempoMs = 0;
	let inicio = null;

	return {
		iniciar() {
			if (inicio !== null) {
				console.log("El cronómetro ya está en marcha.");
				return;
			}

			inicio = Date.now();
		},
		pausar() {
			if (inicio === null) {
				console.log("El cronómetro ya está pausado.");
				return;
			}

			tiempoMs += Date.now() - inicio;
			inicio = null;
		},
		sumar(seg) {
			if (inicio === null) {
				tiempoMs += seg * 1000;
			}
		},
		reiniciar() {
			tiempoMs = 0;
			inicio = null;
		},
		get tiempo() {
			const tiempoActual = inicio === null ? 0 : Date.now() - inicio;
			return Math.floor((tiempoMs + tiempoActual) / 1000);
		},
	};
};

//
// Verificación (estos console.log deben dar los resultados indicados):
//   const crono = crearCronometro();
//   crono.iniciar();
//   crono.iniciar();           // "El cronómetro ya está en marcha."
//   crono.sumar(30);           // no hace nada (está en marcha)
//   crono.pausar();
//   crono.sumar(30);           // suma 30 segundos
//   console.log(crono.tiempo); // 30
//   crono.reiniciar();
//   console.log(crono.tiempo); // 0

const crono = crearCronometro();
crono.iniciar();
crono.iniciar();          
crono.sumar(30);            
crono.pausar();
crono.sumar(30);           
console.log(crono.tiempo); 
crono.reiniciar();
console.log(crono.tiempo);