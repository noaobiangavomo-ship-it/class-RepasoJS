/*

Sintaxis básica

javascript
array.reduce((acumulador, valorActual, indice, array) => {
  // Lógica que retorna el nuevo acumulador
}, valorInicial);
Usa el código con precaución.
• acumulador (acc): Guarda el resultado acumulado en cada vuelta.
• valorActual (cur): El elemento que se está procesando en el array.
• valorInicial (initVal): El valor con el que empieza el acumulador (muy recomendado pasarlo siempre).

Cómo usarlo en diferentes tipos de ejercicios


1. Sumar un array de números (El clásico)

Sirve para reducir una lista numérica a la suma total.
javascript*/
const numeros1 = [10, 20, 30, 40];

const sumaTotal = numeros1.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0); // 0 es el valor inicial del acumulador

console.log(sumaTotal); // 100



/*2. Convertir un array en un Objeto (Agrupar datos por id)

Puedes usar reduce() para organizar elementos según una propiedad específica.
javascript*/

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Sofía", edad: 25 }
];

const porEdad = personas.reduce((acc, persona) => {
  const edad = persona.edad;
  if (!acc[edad]) {
    acc[edad] = [];
  }
  acc[edad].push(persona);
  return acc;
}, {}); // El valor inicial es un objeto vacío {}

console.log(porEdad);
/*
{
  25: [{ nombre: "Ana", edad: 25 }, { nombre: "Sofía", edad: 25 }],
  30: [{ nombre: "Luis", edad: 30 }]
}




3. Contar la frecuencia de elementos (Contar palabras o items)

Ideal para saber cuántas veces se repite cada elemento en un array.
    javascript*/
const frutas = ["manzana", "pera", "manzana", "plátano", "manzana"];

const conteo = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});

console.log(conteo); // { manzana: 3, pera: 1, plátano: 1 }


/*4. Aplanar un array de arrays (Flatten)

Transforma un array multidimensional en uno de una sola dimensión.
    javascript*/

const matriz = [[1, 2], [3, 4], [5, 6]];

const plano = matriz.reduce((acc, fila) => {
    return acc.concat(fila);
}, []);

console.log(plano); // [1, 2, 3, 4, 5, 6]

/*5. Filtrar y mapear al mismo tiempo

reduce() puede hacer el trabajo de filter() + map() en una sola pasada para mayor rendimiento.
    javascript*/

const numeros = [1, 2, 3, 4, 5];

// Queremos el cuadrado solo de los números pares
const resultado = numeros.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.push(num * num);
    }
    return acc;
}, []);

console.log(resultado); // [4, 16]


/* 6 BUSQUEDA DE ELEMENTO MAYOR*/
const temperaturas = [19, 24, 35, 12, 41, 8, 27];

const tempMayor = temperaturas.reduce((acc, curr) => {
    if (curr > acc) {
        return curr;
    } else {
        return acc;
    }
}, temperaturas[0]);

console.log("La temperatura más alta es:", tempMayor);


/* 7 BUSQUEDA DEL MENOR */
// Array cargado con datos reales de precios
const precios = [120, 85, 230, 45, 99, 150];

const precioMenor = precios.reduce((acc, curr) => {
    if (curr < acc) {
        return curr;
    } else {
        return acc;
    }
}, precios[0]);

console.log("El precio más barato es:", precioMenor);

/*8
Usa reduce() y el operador spread (...)

contarEstados(["abierta", "resuelta", "abierta", "en curso", "abierta"])
-> { abierta: 3, resuelta: 1, "en curso": 1 }

contarEstados([]) -> {}

 */



function contarEstados(estados) {
    return estados.reduce((acumulador, estado) => {
        return { ...acumulador, [estado]: (acumulador[estado] || 0) + 1 };
    }, {});
}

console.log(contarEstados(["abierta", "resuelta", "abierta", "en curso", "abierta"]));

console.log(contarEstados([]));

/*9 SI TIENE CLAVE VALOR CONTAR*/

function agrupar(contarPorDepartamento){
    return contarPorDepartamento.reduce((acumulador,departamento)=>{
        return {...acumulador, [departamento.departamento]:(acumulador[departamento.departamento] || 0) + 1 };
    },{})
}
console.log(agrupar([ {nombre: "Ana", departamento: "Ventas"},
    {nombre: "Luis", departamento: "IT"},
    {nombre: "Eva", departamento: "IT"}]));
console.log(agrupar([]))