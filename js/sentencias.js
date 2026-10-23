
let a = 5, b = 10, c = "10";

// ########################
if (b == c) {
    console.log("B Si es C")
}
else {
    console.log("B No es C")
}

// ########################
console.log("\n")
if (b === c) {
    console.log("C es string")
}
else {
    console.log("B No es C")
}

// ########################
console.log("\n")
if (a < b) {
    console.log("a es menor a b")
}
else if (b !== c) {
    console.log("n es diferente a b")
}
else {
    console.log("Hola mundo")
}

// ########################
console.log("\n")
if (a < b) {
    console.log("a es menor a b")
}
if (b !== c) {
    console.log("n es diferente a b")
}
else {
    console.log("Hola mundo")
}

// ########################
console.log("\n")
switch (a){
    case 1:
        console.log("A es 1");
        break;
    case 2:
        console.log("A es 2");
        break;
    case 3:
        console.log("A es 3");
        break;
    case 4:
        console.log("A es 4");
        break;
    case 5:
        console.log("A es 5");
        break;
}

// ########################
console.log("\n")

for (let i = 0; i < a; i++){ // Este itera con un rango determinado
    console.log(i)
}

console.log("\n")
const persona = {nombre: "Ana", edad: 25};
for (let p in persona){ // Este for con el "in" funciona SOLO con diccionarios
    console.log(persona[p])
}

console.log("\n")
const valores = [true, 1, "Camilo", 28]
for (let p of valores){ // Este for con el "of" funciona con tdo lo demás.
    console.log(p)
}

console.log("\n")
const alumnos = ["a", "b", "c"];
let cont = 0, encontrado = false
// for (let p of alumnos){
//     if (p === "a") {
//         console.log("Encontrado")
//         break
//     }
//     console.log("NO")
// }

while(!encontrado && cont < alumnos.length) {
    if (alumnos[cont] === "d"){
        encontrado = true;
    }
    cont++;
}
console.log(encontrado)







