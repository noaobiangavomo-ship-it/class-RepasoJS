// Esto es un comentario

/*
* Esto es un comentario
* multi-linea
* */

// var/let/const x = 1

const PI = Math.PI;

let a, b, c;

a = 1;
// a= "hola mundo";

console.log(b);
b = 2;
console.log(b);

console.log(typeof a);
console.log(typeof b);


// OPERADORES ARITMÉTICOS
// Trabajando con números en A y B

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(2 % 2); // => 0
console.log(b ** b) // 4

// console.log(b++);
// console.log(++b);

// console.log(a--);
// console.log(--a);


// OPERADORES LÓGICOS
/*
* && = and
* || = or
* == Igualación débil. Comparamos valores
* === Igualación fuerte. Compara valor y tipo de dato
* != Desigualdad débil
* !== Desigualdad fuerte
* > mayor que
* < menor que
* >= mayor o igual que
* <= menor o igual que
* ! Invierte el valor boolean
* */


console.log(1 == "1") // Compara 1 == 1
console.log(1 === "1") // Compara 1 == 1 y number == string

console.log(!true) // false => invertimos el valor


let n = "12.5";
console.log(n, typeof n);
console.log(parseInt(n));
console.log(parseFloat(n));
console.log(3.12345678.toFixed(2))
console.log(3.14.toString(), typeof 3.14, typeof 3.14.toString())


// Objetos JSON
let edad = 17;

let persona1 = {
    nombre: "John",
    edad: 27,
    esMayor: function () {
        if (edad >= 18)
            console.log("Mayor de edad")
        else
            console.log("Menor de edad")
    }
}
let persona2 = {
    "nombre": "Camilo",
    "edad": 28
}

// Si no ponemos "" en claves del objeto, podemos acceder al valor tanto obj["clave"] como obj.clave
console.log(persona1.nombre)
console.log(persona1.edad)
persona1.esMayor()
persona1["grado"] = "DAW"
persona1.estudia = "2ndo"
console.log(persona1)
delete persona1.estudia;
console.log(persona1)


// Si ponemos"" en claves del objeto, procuremos siempre acceder a su valor obj["clave"]
console.log(persona2["nombre"])
console.log(persona2["edad"])







