const separator = () => console.log("\n\n");

/*
*
* EJERCICIOS BUCLES:
*  - MAP
*  - FOREACH
*  - FILTER
*  - REDUCE
*
* */


// ============================================================
//  EJERCICIOS
// ============================================================


/*
 * 1. Tienes el siguiente array de temperaturas en Celsius registradas
 *    durante una semana:
 *
 *    const temperaturas = [22, 35, 18, 40, 28, 15, 33]; // Estas temperaturas son en Celsius
 *
 *    - Usa map para crear un nuevo array con las temperaturas convertidas
 *      a Fahrenheit. La fórmula es: (celsius * 9/5) + 32
 *    - Usa filter para obtener solo las temperaturas (en Celsius) que
 *      superen los 30 grados.
 *    - Usa forEach para mostrar por consola cada temperatura en Celsius
 *      con el mensaje: "Día X: 22°C" (donde X es el número del día, empezando en 1).
 *
 * */

const temperaturas = [22, 35, 18, 40, 28, 15, 33];
// const tFahrenheit = temperaturas.map(item => {
//     return (item * 9/5) + 32
// })
const tFahrenheit = temperaturas.map(item => (item * 9 / 5) + 32);
console.log(tFahrenheit);

// const tUpCelcius = temperaturas.filter(item => {
//     return item > 30;
// })
const tUpCelcius = temperaturas.filter(item => item > 30);
console.log(tUpCelcius);

temperaturas.forEach((item, index) => {
    console.log(`Día ${(index + 1)}: ${item}°C`);
})
separator()
separator()

/*
 * 2. Tienes el siguiente array con los productos de un carrito de compra:
 *
 *    const carrito = [
 *      { nombre: "Camiseta",   precio: 19.99, cantidad: 3 },
 *      { nombre: "Pantalón",   precio: 49.99, cantidad: 1 },
 *      { nombre: "Zapatillas", precio: 89.99, cantidad: 2 },
 *      { nombre: "Calcetines", precio: 4.99,  cantidad: 5 },
 *      { nombre: "Gorra",      precio: 14.99, cantidad: 1 },
 *    ];
 *
 *    - Usa map para crear un nuevo array donde cada producto tenga
 *      una propiedad extra "total" con el resultado de precio * cantidad.
 *    - Usa reduce para calcular el precio total del carrito sumando
 *      el precio * cantidad de cada producto.
 *    - Usa filter para obtener solo los productos cuyo precio unitario
 *      sea menor de 20€.
 * */

const carrito = [
    {nombre: "Camiseta", precio: 19.99, cantidad: 3},
    {nombre: "Pantalón", precio: 49.99, cantidad: 1},
    {nombre: "Zapatillas", precio: 89.99, cantidad: 2},
    {nombre: "Calcetines", precio: 4.99, cantidad: 5},
    {nombre: "Gorra", precio: 14.99, cantidad: 1},
];

// const carritoConTotal = carrito.map(item => {
//     return {
//         nombre: item.nombre,
//         precio: item.precio,
//         cantidad: item.cantidad,
//         total: Number((item.precio * item.cantidad).toFixed(2)),
//     }
// })
/*
* ...parametros => añadir de 0 a n elementos
* {...productos} => {nombre: item.nombre, precio: item.precio, cantidad: item.cantidad,}
*
* */
const carritoConTotal = carrito.map(item => {
    return {
        ...item,
        total: Number((item.precio * item.cantidad).toFixed(2)),
    }
})
console.log(carritoConTotal);

// const sumaCarrito = carritoConTotal.reduce((acum, item) => {return acum + item.total}, 0)
const sumaCarrito = carritoConTotal.reduce((acum, item) => acum + item.total, 0)
console.log(sumaCarrito);

const precioMenorA20 = carrito.filter(item => item.precio <= 20);
console.log(precioMenorA20);

separator()
separator()
/*
 * 3. Tienes el siguiente array con los jugadores de un equipo de fútbol:
 *
 *    const jugadores = [
 *      { nombre: "Messi",    goles: 30, posicion: "Delantero" },
 *      { nombre: "Busquets", goles: 2,  posicion: "Centrocampista" },
 *      { nombre: "Piqué",    goles: 5,  posicion: "Defensa" },
 *      { nombre: "Modric", goles: 10, posicion: "Centrocampista" },
 *      { nombre: "Mbappe",     goles: 28,  posicion: "Delantero" },
 *      { nombre: "Lamine",    goles: 4,  posicion: "Centrocampista" },
 *    ];
 *
 *    - Usa filter para obtener solo los jugadores que jueguen de "Delantero".
 *    - Usa reduce para calcular el total de goles de todo el equipo.
 *    - Usa map para crear un nuevo array con solo los nombres de los jugadores
 *      y sus goles en formato: "Messi - 30 goles".
 * */
const jugadores = [
    {nombre: "Messi", goles: 30, posicion: "Delantero"},
    {nombre: "Busquets", goles: 2, posicion: "Centrocampista"},
    {nombre: "Piqué", goles: 5, posicion: "Defensa"},
    {nombre: "Modric", goles: 10, posicion: "Centrocampista"},
    {nombre: "Mbappe", goles: 28, posicion: "Delantero"},
    {nombre: "Lamine", goles: 4, posicion: "Centrocampista"},
];

const delanteros = jugadores.filter(item => item.posicion === "Delantero");
const golesTotal = jugadores.reduce((acum, item) => acum + item.goles, 0)
const jugad = jugadores.map(item => `${item.nombre} - ${item.goles} goles`);

console.log(delanteros);
console.log(golesTotal);
console.log(jugad);
jugad.forEach((item) => console.log(item));

separator()
separator()

/*
 * 4. Tienes el siguiente array con las calificaciones de varios alumnos:
 *
 *    const alumnos = [
 *      { nombre: "Ana",    nota: 8.5 },
 *      { nombre: "Carlos", nota: 4.2 },
 *      { nombre: "Lucía",  nota: 6.0 },
 *      { nombre: "Pedro",  nota: 3.8 },
 *      { nombre: "Sara",   nota: 9.1 },
 *      { nombre: "Diego",  nota: 5.0 },
 *    ];
 *
 *    - Usa filter para obtener solo los alumnos aprobados (nota >= 5).
 *    - Usa map para añadir a cada alumno una propiedad "estado" con el
 *      valor "Aprobado" o "Suspenso" según su nota.
 *    - Usa reduce para calcular la nota media de toda la clase.
 *    - Usa forEach para mostrar por consola el resultado de cada alumno:
 *      "Ana → 8.50 (APROBADO)" si aprobó o "Carlos → 4.20 (SUSPENSO)" si suspendió.
 * */
const alumnos = [
    {nombre: "Ana", nota: 8.5},
    {nombre: "Carlos", nota: 4.2},
    {nombre: "Lucía", nota: 6.0},
    {nombre: "Pedro", nota: 3.8},
    {nombre: "Sara", nota: 9.1},
    {nombre: "Diego", nota: 5.0},
];

console.log(alumnos.filter(alumno => alumno.nota >= 5))
const alumnosAprobados = alumnos.map(alumno => {
    return {
        ...alumno,
        estado: alumno.nota >= 5 ? "Aprobado" : "Suspenso"
    }
})
console.log(alumnosAprobados);

const sumaNotas = alumnos.reduce((acum, alumno) => acum + alumno.nota, 0)
console.log("Media de la clase: ", (sumaNotas / alumnos.length).toFixed(2));

alumnos.forEach(alumno => {
    let haAprobado = alumno.nota >= 5 ? 'APROBADO' : 'SUSPENSO'
    console.log(`${alumno.nombre} → ${alumno.nota} (${haAprobado})`)
})
separator()
separator()
/*
 * 5. Tienes el siguiente array con las ventas mensuales de una empresa:
 *
 *    const ventas = [
 *      { mes: "Enero",      importe: 12500 },
 *      { mes: "Febrero",    importe: 9800  },
 *      { mes: "Marzo",      importe: 15200 },
 *      { mes: "Abril",      importe: 7300  },
 *      { mes: "Mayo",       importe: 18900 },
 *      { mes: "Junio",      importe: 11400 },
 *    ];
 *
 *    - Usa reduce para calcular el total de ventas del semestre.
 *    - Usa filter para obtener los meses en los que las ventas
 *      superaron los 12.000€.
 *    - Usa map para crear un nuevo array donde el importe de cada mes
 *      tenga aplicado un incremento del 5% (previsión para el año siguiente).
 *    - Usa forEach para mostrar por consola el informe de cada mes:
 *      "Enero: 12.500€".
 * */

const ventas = [
    {mes: "Enero", importe: 12500},
    {mes: "Febrero", importe: 9800},
    {mes: "Marzo", importe: 15200},
    {mes: "Abril", importe: 7300},
    {mes: "Mayo", importe: 18900},
    {mes: "Junio", importe: 11400},
];
console.log(ventas.reduce((acum, venta) => acum + venta.importe, 0))
console.log(ventas.filter(venta => venta.importe > 12000))

const incremento = ventas.map(venta => {
    return {
        mes: venta.mes,
        importe: venta.importe * 1.05,
    }
})
console.log(incremento);

ventas.forEach(venta => console.log(`${venta.mes}: ${venta.importe}€`));



// ============================================================
//  EJERCICIOS — (forEach, map, filter, reduce, find, some, every, with, reverse, toString)
// ============================================================


/*
 * 6. Gestión de una playlist de música
 *
 *    const playlist = [
 *      { titulo: "Bohemian Rhapsody", artista: "Queen",      duracion: 354, reproducciones: 1200 },
 *      { titulo: "Blinding Lights",   artista: "The Weeknd", duracion: 200, reproducciones: 980  },
 *      { titulo: "Shape of You",      artista: "Ed Sheeran", duracion: 234, reproducciones: 1500 },
 *      { titulo: "Hotel California",  artista: "Eagles",     duracion: 391, reproducciones: 870  },
 *      { titulo: "Levitating",        artista: "Dua Lipa",   duracion: 203, reproducciones: 620  },
 *      { titulo: "Smells Like Teen",  artista: "Nirvana",    duracion: 301, reproducciones: 1100 },
 *    ];
 *
 *    - Usa forEach para mostrar cada canción: "Queen — Bohemian Rhapsody".
 *    - Usa filter para obtener las canciones con más de 1000 reproducciones.
 *    - Usa map para crear un nuevo array con los títulos en mayúsculas
 *      y las reproducciones incrementadas un 10%.
 *    - Usa reduce para calcular la duración total de la playlist en segundos.
 *    - Usa find para encontrar la primera canción que dure más de 300 segundos.
 *    - Usa some para comprobar si alguna canción supera las 1400 reproducciones.
 *    - Usa every para comprobar si todas las canciones superan las 500 reproducciones.
 *    - Usa with para corregir las reproducciones de "Levitating" (índice 4) a 750.
 *    - Usa reverse (sin mutar el original) para mostrar la playlist al revés.
 *    - Usa toString para obtener una cadena con todos los títulos separados por comas.
 *      Pista: primero extrae los títulos con map.
 *
 * */

 const playlist = [
       { titulo: "Bohemian Rhapsody", artista: "Queen",      duracion: 354, reproducciones: 1200 },
       { titulo: "Blinding Lights",   artista: "The Weeknd", duracion: 200, reproducciones: 980  },
       { titulo: "Shape of You",      artista: "Ed Sheeran", duracion: 234, reproducciones: 1500 },
      { titulo: "Hotel California",  artista: "Eagles",     duracion: 391, reproducciones: 870  },
      { titulo: "Levitating",        artista: "Dua Lipa",   duracion: 203, reproducciones: 620  },
      { titulo: "Smells Like Teen",  artista: "Nirvana",    duracion: 301, reproducciones: 1100 },
     ];
// forEach
playlist.forEach(playlist => console.log(`${playlist.artista} - ${playlist.titulo}: ${playlist.reproducciones}`));
// filter canciones con mas 1000 reproducciones
const mayorReproducciones = playlist.filter(item => item.reproducciones >= 1000);
console.log( mayorReproducciones);

//usar map 
const titulosRepro = playlist.map(item => {
    return {
        ...item,
        tiRe: Number((item.reproducciones * 0.10).toFixed(2)),
    }
})
console.log(titulosRepro);
//reduce

const duracionTotal = playlist.reduce((total, cancion) => {
    return total + cancion.duracion;
}, 0);

console.log("Duración total:", duracionTotal, "segundos");


// find cancion que dure mas de 300 segundos
const MasRepr  = playlist.find(item => {
     return item.duracion > 300 
} );
console.log(MasRepr);
// some para mirar si hay una cancion que supera los 1400 reproducciones


const cancion_mayor = playlist.some( item =>{
     return item.reproducciones  > 1400
} );
console.log(cancion_mayor);
// every 500 reproducciones
const mayor_repro = playlist.every(item =>{
     return item.reproducciones > 500
}  );
console.log(mayor_repro);
//with 
const playlist2 = playlist.with(4,750)
 console.log(playlist2);
// reverse 
playlist.reverse();
console.log(playlist);
//tostring(extraer los titulos con map)
const titulos = playlist.map(item => item.titulo);
const resultado = titulos.toString();
console.log(resultado);;

/*
 * 7. Sistema de pedidos de un restaurante
 *
 *    const pedidos = [
 *      { id: 1, cliente: "Ana",   plato: "Paella",      precio: 14.50, listo: true  },
 *      { id: 2, cliente: "Luis",  plato: "Ensalada",    precio: 8.00,  listo: false },
 *      { id: 3, cliente: "Marta", plato: "Chuletón",    precio: 22.00, listo: true  },
 *      { id: 4, cliente: "Pedro", plato: "Gazpacho",    precio: 6.50,  listo: false },
 *      { id: 5, cliente: "Sofía", plato: "Risotto",     precio: 16.00, listo: true  },
 *      { id: 6, cliente: "Jorge", plato: "Hamburguesa", precio: 11.00, listo: false },
 *    ];
 *
 *    - Usa forEach para mostrar cada pedido: "Pedido #1 — Ana — Paella — 14.50€".
 *    - Usa filter para obtener solo los pedidos que ya están listos.
 *    - Usa map para añadir a cada pedido una propiedad "precioConIva" (precio * 1.21).
 *    - Usa reduce para calcular la recaudación total de todos los pedidos.
 *    - Usa find para localizar el pedido del cliente "Marta".
 *    - Usa some para comprobar si hay algún pedido que supere los 20€.
 *    - Usa every para comprobar si todos los pedidos están listos.
 *    - Usa with para marcar el pedido de Luis (índice 1) como listo: true.
 *    - Usa reverse (sin mutar el original) para mostrar los pedidos del último al primero.
 *    - Usa toString para obtener una cadena con todos los platos.
 *      Pista: primero extrae los platos con map.
 *
 * */

const pedidos = [
     { id: 1, cliente: "Ana",   plato: "Paella",      precio: 14.50, listo: true  },
      { id: 2, cliente: "Luis",  plato: "Ensalada",    precio: 8.00,  listo: false },
     { id: 3, cliente: "Marta", plato: "Chuletón",    precio: 22.00, listo: true  },
       { id: 4, cliente: "Pedro", plato: "Gazpacho",    precio: 6.50,  listo: false },
       { id: 5, cliente: "Sofía", plato: "Risotto",     precio: 16.00, listo: true  },
       { id: 6, cliente: "Jorge", plato: "Hamburguesa", precio: 11.00, listo: false },
     ];
//forEach
pedidos.forEach(pedidos => console.log(`${pedidos.id} - ${pedidos.cliente}- ${pedidos.plato}- ${pedidos.precio}`));
// filter
const pedido_Listo = pedidos.filter( item => item.listo === true);
console.log(pedido_Listo);
//map
const precioIva = pedidos.map( item => {
     return{
          ...item,
          precioConIva: (item.precio *1.21).toFixed(2),
     }
} );
console.log(precioIva);
//reduce
const Recaudacion = pedidos.reduce((acum, total) => {
     return acum + total.precio;
}, 0);
console.log(Recaudacion)
//find 
const EncontrarCliente = pedidos.find(item => {
     return item.cliente ==="Marta"
});
console.log(EncontrarCliente);
// some 
const ENcontrarPedido = pedidos.some(item => {
     return item.precio >= 20; 
});
console.log(ENcontrarPedido);
//every 
const pedidosListos = pedidos.every(item => {
     return item.listo === true;
});
console.log(pedidosListos);
// with
const pedido2 = pedidos.with(1, true);
console.log(pedido2);
// reverse
pedidos.reverse();
console.log(pedidos);
// tostring
const nombres = pedidos.map(item => item.plato);
const answer = nombres.toString();
console.log(answer);
/*
 * 8. Resultados de un torneo de videojuegos
 *
 *    const jugadores = [
 *      { nombre: "XxGamer99",  puntos: 4200, victorias: 18, derrotas: 7,  pais: "España"   },
 *      { nombre: "ProPlayer",  puntos: 3800, victorias: 15, derrotas: 10, pais: "Francia"  },
 *      { nombre: "NinjaCode",  puntos: 5100, victorias: 22, derrotas: 3,  pais: "España"   },
 *      { nombre: "DarkMaster", puntos: 2900, victorias: 12, derrotas: 13, pais: "Alemania" },
 *      { nombre: "StarKiller", puntos: 4700, victorias: 20, derrotas: 5,  pais: "España"   },
 *      { nombre: "IronFist",   puntos: 3200, victorias: 14, derrotas: 11, pais: "Italia"   },
 *    ];
 *
 *    - Usa forEach para mostrar el ranking: "1. XxGamer99 — 4200 pts".
 *      Pista: forEach puede recibir el índice como segundo parámetro.
 *    - Usa filter para obtener solo los jugadores de "España".
 *    - Usa map para añadir a cada jugador una propiedad "ratio" calculada como
 *      victorias / (victorias + derrotas). Redondéala con toFixed(2).
 *    - Usa reduce para calcular el total de puntos del torneo.
 *    - Usa find para encontrar al primer jugador con más de 5000 puntos.
 *    - Usa some para comprobar si algún jugador tiene más de 20 victorias.
 *    - Usa every para comprobar si todos los jugadores tienen más de 10 victorias.
 *    - Usa with para corregir los puntos de "DarkMaster" (índice 3) a 3100.
 *    - Usa reverse (sin mutar el original) para ver la clasificación de último a primero.
 *    - Usa toString para obtener una cadena con todos los nombres de los jugadores.
 *      Pista: primero extrae los nombres con map.
 *
 * */
    const Jugadores = [
       { nombre: "XxGamer99",  puntos: 4200, victorias: 18, derrotas: 7,  pais: "España"   },
       { nombre: "ProPlayer",  puntos: 3800, victorias: 15, derrotas: 10, pais: "Francia"  },
      { nombre: "NinjaCode",  puntos: 5100, victorias: 22, derrotas: 3,  pais: "España"   },
       { nombre: "DarkMaster", puntos: 2900, victorias: 12, derrotas: 13, pais: "Alemania" },
      { nombre: "StarKiller", puntos: 4700, victorias: 20, derrotas: 5,  pais: "España"   },
       { nombre: "IronFist",   puntos: 3200, victorias: 14, derrotas: 11, pais: "Italia"   },
     ];
//forEach
Jugadores.forEach(Jugadores => console.log(`${Jugadores.nombre} - ${Jugadores.puntos}- ${Jugadores.victorias}- ${Jugadores.derrotas}- ${Jugadores.pais}`));
// map 
const radio = Jugadores.map(item => {
    return {
        ...item,
        ratio: (item.victorias / (item.victorias + item.derrotas)).toFixed(2)
    };
});
console.log(radio);
//reduce
const calculoTorneo = Jugadores.reduce((acum, total)=> {
     return acum + total.puntos;
}, 0);
console.log(calculoTorneo);

// find
const encontrarJugador = Jugadores.find( item =>{
     return item.puntos> 5000;
});
console.log(encontrarJugador);
// some 
const encuetrajugador = Jugadores.some(item=>  {
     return item.victorias > 20;
}); 
console.log(encuetrajugador);
//every
const encuetraju = Jugadores.some(item=>  {
     return item.victorias >=10;
}); 
console.log(encuetraju);
// with
const jugadoresCorregidos = Jugadores.with(3, 3100);
console.log(jugadoresCorregidos);
// reverse
const jugadoresAlReves = Jugadores.reverse();
console.log(jugadoresAlReves);
// toString

const Nombres = Jugadores.map(item => item.nombre);
const nombresString = Nombres.toString();
console.log(nombresString);
/*
 * 9. Liga de fútbol — jornada de partidos
 *
 *    const partidos = [
 *      { local: "Barcelona",  visitante: "Madrid",    golesLocal: 3, golesVisitante: 1, jornada: 1 },
 *      { local: "Sevilla",    visitante: "Valencia",  golesLocal: 1, golesVisitante: 1, jornada: 1 },
 *      { local: "Atlético",   visitante: "Villarreal",golesLocal: 2, golesVisitante: 0, jornada: 1 },
 *      { local: "Betis",      visitante: "Getafe",    golesLocal: 0, golesVisitante: 1, jornada: 2 },
 *      { local: "Madrid",     visitante: "Atlético",  golesLocal: 2, golesVisitante: 2, jornada: 2 },
 *      { local: "Valencia",   visitante: "Barcelona", golesLocal: 1, golesVisitante: 4, jornada: 2 },
 *    ];
 *
 *    - Usa map para añadir a cada partido una propiedad "resultado":
 *        "Victoria local" si golesLocal > golesVisitante
 *        "Victoria visitante" si golesLocal < golesVisitante
 *        "Empate" si son iguales.
 *
 *    - Usa filter para obtener solo los partidos de la jornada 2.
 *
 *    - Usa reduce para calcular el total de goles marcados en toda la liga
 *      (suma golesLocal + golesVisitante de cada partido).
 *
 *    - Usa forEach para mostrar cada partido como en una quiniela:
 *        "Barcelona 3 - 1 Madrid → 1"   (1 = local, X = empate, 2 = visitante)
 *
 *    - Usa find para localizar el primer partido en el que jugó el "Madrid"
 *      (como local O como visitante). Muestra el marcador.
 *
 *    - Usa some para comprobar si hubo algún partido con más de 4 goles en total.
 *
 *    - Usa every para comprobar si todos los partidos de la jornada 1
 *      tuvieron al menos un gol.
 *      Pista: encadena filter y every.
 *
 *    - Usa reduce para construir un objeto que cuente cuántas victorias locales,
 *      visitantes y empates hubo en total.
 *      Ejemplo resultado: { local: 3, visitante: 1, empate: 2 }
 *      Pista: el valor inicial del reduce puede ser un objeto {}.
 *
 *    - Usa with para corregir el resultado del partido Betis-Getafe (índice 3):
 *      los goles del Betis fueron 1, no 0.
 *
 *    - Usa reverse (sin mutar el original) para mostrar los partidos
 *      de la última jornada a la primera.
 *
 * */
 const partidos = [
       { local: "Barcelona",  visitante: "Madrid",    golesLocal: 3, golesVisitante: 1, jornada: 1 },
       { local: "Sevilla",    visitante: "Valencia",  golesLocal: 1, golesVisitante: 1, jornada: 1 },
       { local: "Atlético",   visitante: "Villarreal",golesLocal: 2, golesVisitante: 0, jornada: 1 },
       { local: "Betis",      visitante: "Getafe",    golesLocal: 0, golesVisitante: 1, jornada: 2 },
       { local: "Madrid",     visitante: "Atlético",  golesLocal: 2, golesVisitante: 2, jornada: 2 },
       { local: "Valencia",   visitante: "Barcelona", golesLocal: 1, golesVisitante: 4, jornada: 2 },
     ];
 
//map
const partidosResultado = partidos.map(item => {
    let resultado;

    if (item.golesLocal > item.golesVisitante) {
        resultado = "Victoria local";
    } else if (item.golesLocal < item.golesVisitante) {
        resultado = "Victoria visitante";
    } else {
        resultado = "Empate";
    }

    return {
        ...item,
        resultado: resultado
    };
});

console.log(partidosResultado);
// filter: 
const jornada2 = partidos.filter(item => item.jornada === 2);
console.log(jornada2);
// reduce
const totalGoles = partidos.reduce((total, item) => {
    return total + item.golesLocal + item.golesVisitante;
}, 0);
console.log(totalGoles);
//forEach
partidos.forEach(item => {

    let resultado;

    if (item.golesLocal > item.golesVisitante) {
        resultado = "1";
    } else if (item.golesLocal < item.golesVisitante) {
        resultado = "2";
    } else {
        resultado = "X";
    }

    console.log(`${item.local} ${item.golesLocal} - ${item.golesVisitante} ${item.visitante} → ${resultado}`);
});
// find 
const buscarLocal = partidos.find(item=>{
     return item.local==="Madrid" || item.visitante==="Madrid";
} );
console.log(buscarLocal);
//some
const masDe4 = partidos.some(item => {
    return item.golesLocal + item.golesVisitante > 4;
});
console.log(masDe4);
// filter + every
const partidosJornada1 = partidos.filter(item => item.jornada === 1);
const todosConGol = partidosJornada1.every(item => {
    return item.golesLocal + item.golesVisitante >= 1;
});

console.log(todosConGol);

//reduce
const resultados = partidos.reduce((total, item) => {
    if (item.golesLocal > item.golesVisitante) {
        total.local++;
    } else if (item.golesLocal < item.golesVisitante) {
        total.visitante++;
    } else {
        total.empate++;
    }

    return total;

}, {
    local: 0,
    visitante: 0,
    empate: 0
});

console.log(resultados);
 // reverse
 const partidosReverso = [...partidos].reverse();

console.log(partidosReverso);

//
/*
 * 10. Gestión de alumnos con notas por asignatura
 *
 *    const alumnos = [
 *      {
 *        nombre: "Carmen",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 7.5 },
 *          { nombre: "Lengua",      nota: 8.0 },
 *          { nombre: "Historia",    nota: 6.5 },
 *          { nombre: "Inglés",      nota: 9.0 },
 *        ]
 *      },
 *      {
 *        nombre: "Roberto",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 4.0 },
 *          { nombre: "Lengua",      nota: 5.5 },
 *          { nombre: "Historia",    nota: 3.5 },
 *          { nombre: "Inglés",      nota: 6.0 },
 *        ]
 *      },
 *      {
 *        nombre: "Elena",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 9.5 },
 *          { nombre: "Lengua",      nota: 8.5 },
 *          { nombre: "Historia",    nota: 9.0 },
 *          { nombre: "Inglés",      nota: 8.0 },
 *        ]
 *      },
 *      {
 *        nombre: "David",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 5.0 },
 *          { nombre: "Lengua",      nota: 4.5 },
 *          { nombre: "Historia",    nota: 6.0 },
 *          { nombre: "Inglés",      nota: 5.5 },
 *        ]
 *      },
 *      {
 *        nombre: "Isabel",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 6.0 },
 *          { nombre: "Lengua",      nota: 7.0 },
 *          { nombre: "Historia",    nota: 5.5 },
 *          { nombre: "Inglés",      nota: 7.5 },
 *        ]
 *      },
 *    ];
 *
 *    - Usa map para crear un nuevo array donde cada alumno tenga:
 *        · nombre
 *        · promedio: la media de sus notas (usa reduce sobre sus asignaturas)
 *        · estado: "Aprobado" si el promedio >= 5, "Suspenso" si no.
 *      Pista: necesitarás un reduce DENTRO del map para calcular el promedio.
 *
 *    - Usa filter sobre el array del punto anterior para obtener
 *      solo los alumnos aprobados.
 *
 *    - Usa find para localizar al alumno que tenga alguna asignatura
 *      suspensa (nota < 5). Muestra su nombre y qué asignatura ha suspendido.
 *      Pista: usa some dentro del find para buscar en sus asignaturas.
 *
 *    - Usa forEach para mostrar el boletín de notas de cada alumno:
 *        "Carmen:"
 *        "  · Matemáticas: 7.5"
 *        "  · Lengua: 8.0"
 *        "  ..."
 *      Pista: usa forEach anidado para recorrer las asignaturas de cada alumno.
 *
 *    - Usa some para comprobar si algún alumno tiene un promedio mayor de 9.
 *      Pista: calcula el promedio dentro del some con reduce.
 *
 *    - Usa every para comprobar si todos los alumnos aprueban Inglés.
 *      Pista: usa find dentro del every para buscar la asignatura.
 *
 *    - Usa reduce para calcular la nota media global de toda la clase
 *      (la media de todos los promedios individuales).
 *
 *    - Usa with para actualizar las asignaturas de Roberto (índice 1)
 *      con las mismas pero con la nota de Matemáticas corregida a 5.0.
 *      Pista: tendrás que construir el nuevo array de asignaturas con map y with.
 *
 *    - Usa reverse (sin mutar el original) y forEach para mostrar
 *      la lista de alumnos en orden inverso.
 *
 *    - Usa map y toString para obtener una cadena con todos los nombres.
 *
 * */

 const alummnos = [
       {
         nombre: "Carmen",
         asignaturas: [
           { nombre: "Matemáticas", nota: 7.5 },
           { nombre: "Lengua",      nota: 8.0 },
           { nombre: "Historia",    nota: 6.5 },
           { nombre: "Inglés",      nota: 9.0 },
         ]
       },
       {
         nombre: "Roberto",
         asignaturas: [
           { nombre: "Matemáticas", nota: 4.0 },
           { nombre: "Lengua",      nota: 5.5 },
           { nombre: "Historia",    nota: 3.5 },
           { nombre: "Inglés",      nota: 6.0 },
         ]
       },
       {
         nombre: "Elena",
         asignaturas: [
           { nombre: "Matemáticas", nota: 9.5 },
           { nombre: "Lengua",      nota: 8.5 },
           { nombre: "Historia",    nota: 9.0 },
          { nombre: "Inglés",      nota: 8.0 },
         ]
       },
       {
         nombre: "David",
         asignaturas: [
          { nombre: "Matemáticas", nota: 5.0 },
          { nombre: "Lengua",      nota: 4.5 },
           { nombre: "Historia",    nota: 6.0 },
           { nombre: "Inglés",      nota: 5.5 },
         ]
       },
       {
         nombre: "Isabel",
         asignaturas: [
           { nombre: "Matemáticas", nota: 6.0 },
           { nombre: "Lengua",      nota: 7.0 },
           { nombre: "Historia",    nota: 5.5 },
           { nombre: "Inglés",      nota: 7.5 },
         ]
       },
     ];
 /*
   *   - Usa map para crear un nuevo array donde cada alumno tenga:
 *        · nombre
 *        · promedio: la media de sus notas (usa reduce sobre sus asignaturas)
 *        · estado: "Aprobado" si el promedio >= 5, "Suspenso" si no.
 *      Pista: necesitarás un reduce DENTRO del map para calcular el promedio.
 */
