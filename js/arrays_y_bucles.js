const separator = () => {
    console.log("\n\n");
}

console.log(" ############## ")
console.log("Arrays y bucles")
console.log(" ############## ")
separator()

let arr1 = [];
arr1[0] = 1 // [1]
console.log(arr1)
console.log(arr1[2]) // undefined

if (arr1[2] === undefined) { // !arr1[2]
    console.log("No está definido")
}

// indexOf nos retorna la posición de un elemento dentro del Array
console.log(arr1.indexOf(1)) // 0
console.log(arr1.indexOf(2)) // -1

arr1.push(2) // [1, 2]
console.log(arr1)
console.log(arr1.indexOf(2)) // 1
console.log(arr1.indexOf(5)) // -1


arr1.pop() // Borramos el último valor del Array
console.log(arr1) // [1]

arr1.push(5)
arr1.push(10)
arr1.push(15) // [1, 5, 10, 15]

// Shift lo que hace es borrar el primer elemento del Array
arr1.shift() // [5, 10, 15]
console.log(arr1)

// Añadimos un elemento en primera posición del Array
arr1.unshift(0) // [0, 5, 10, 15]
console.log(arr1)

// sort es ordenar a->z, 0->100
arr1.sort()
console.log(arr1)

console.log(Array.isArray(arr1)) // true => porque es un Array
console.log(Array.isArray({"nombre": "Camilo"})) // false => porque es un JSON
console.log()

console.log(arr1.includes("Manzana")) // false

// [0, 5, 10, 15]
console.log(arr1.join(" <=> ")) // "0 <=> 5 <=> 10 <=> 15"

separator()
separator()

console.log(" ############## ")
console.log("Bucles")
console.log(" ############## ")
separator()

const juegos = [
    {titulo: "The Last Of Us", precio: 59.99, categoria: "Aventura"},
    {titulo: "FIFA 25", precio: 49.99, categoria: "Deporte"},
    {titulo: "Minecraft", precio: 19.99, categoria: "Sandbox"},
    {titulo: "Elden Ring", precio: 69.99, categoria: "Aventura"},
    {titulo: "Among Us", precio: 4.99, categoria: "Casual"},
    {titulo: "Call of Duty", precio: 69.99, categoria: "Acción"},
]

// 1. FOREACH
for (let i = 0; i < juegos.length; i++) {
    console.log(`${juegos[i].titulo} - ${juegos[i].precio}€`)
}

separator()
// parámetros: PrimerElemento (item del array), SegundoElemento (index)
juegos.forEach((juego) => {
    if (juego.precio < 50)
        console.log(`${juego.titulo} - ${juego.precio}€`)
})


// 2. MAP => lo que hace es generar una copia exacta del array,
// pero haciendo modificaciones que nosotros necesitemos

let productos_con_descuento = [];

for (let i = 0; i < juegos.length; i++) {
    const juego_con_descuento = {
        titulo: juegos[i].titulo,
        precio: (juegos[i].precio * 0.8).toFixed(2),
        categoria: juegos[i].categoria,
    }
    productos_con_descuento.push(juego_con_descuento)
}


const productos_con_descuento_map = juegos.map(juego => {
    let juego_con_descuento = {
        titulo: juego.titulo,
        precio: (juego.precio * 0.8).toFixed(2),
        categoria: juego.categoria,
    }
    return juego_con_descuento
})


// 3. FILTER => hace lo mismo que el MAP, pero hace un filtro, es decir, solo guarda los elementos que
// cumplan una condición.

const juegos_menor_a_50 = []
for (let i = 0; i < juegos.length; i++) {
    if (juegos[i].precio < 50) {
        juegos_menor_a_50.push(juegos[i])
    }
}

const juegos_menor_a_50_filter = juegos.filter(juego => {
    if (juego.precio < 50)
        return juego
})

// 4. REDUCE => Con varios elementos, lo que hacemos reducir al máximo el tamaño del array. Ej: un carrito.
// Tienes x elementos a comprar, el reduce lo que haría sería calcular la suma total que vas a pagar.

let suma_carrito = 0
for (let i = 0; i < juegos.length; i++) {
    suma_carrito += juegos[i].precio
}

let suma_carrito_reduce = juegos.reduce((acumulador, juego) => {
    return acumulador + juego.precio
}, 0)


// 5. FIND => Retorna el primer elemento que cumpla la condición proporcionada aunque existan más de 1 elemento.

let numeros = [1, 2, 5, 10, 20, 25]

// let existe = false, n = undefined, cont = 0
// while (!existe && cont < numeros.length) {
//     if (numeros[cont] > 5) {
//         existe = true
//         n = numeros[cont]
//     }
//     cont++;
// }
// console.log(existe, n)

let buscar_find = numeros.find(n => {
    return n > 5
});
console.log(buscar_find)
separator()
separator()


// 6. SOME y 7. EVERY
// SOME => Al menos un elemento en el array debe de cumplir la condición
// EVERY => TODOS los elementos del array deben de cumplir la condición

const juegos_menor_10 = juegos.some(juego => { // true
    return juego.precio < 4
})
console.log(juegos_menor_10)

const juegos_precio_mayor_a_10 = juegos.every(juego => { // false
    return juego.precio > 10
})
console.log(juegos_precio_mayor_a_10)
separator()
separator()

// 8. WITH
// WITH => Cambia el valor de un elemento en un array. Le proporcionamos la posición y el nuevo valor

let numeros2 = [1, 2, 5, 10, 20, 25] // Reemplacemos el valor de 5 por 30
let numeros3 = numeros2.with(2, 30)
console.log(numeros2)
console.log(numeros3)

// 9. REVERSE
// REVERSE => Invertimos la lista
numeros3.reverse()
console.log(numeros3)

// 10. toString
// toString => juntamos en una cadena de texto los elementos de un array
console.log(numeros2.toString())





