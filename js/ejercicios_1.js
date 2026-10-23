/*
*
* EJERCICIOS
*
*/


/*
* 1. Usando un bucle while, recorre números del 1 al 20. Cuenta cuantos números pares hay. Al finalizar el bucle, imprime por pantalla la cantidad total de pares.
* */
console.log("\n")

let cont = 0, cont_pares = 0;
while (cont <= 20) {
    if (cont % 2 === 0) {
        cont_pares++;
    }
    cont++;
}
console.log(`Total números pares: ${cont_pares}`)


/*
* 2. Crea una variable llamada color. Con un solo valor o "rojo" o "verde" o "amarillo". Usa switch para mostrar la instrucción correspondiente
* ("Parado", "Arrancar", "Frenando"). Prueba que el programa funciona cambiando el valor de la variable color.
* */
console.log("\n")
let color = "amarillo";
switch (color) {
    case "verde":
        console.log("En marcha");
        break;
    case "amarillo":
        console.log("Frenando");
        break;
    case "rojo":
        console.log("Parado");
        break;
}


/*
* 3. Define na variable llamada saldo. Como valor inicial pon 1000 (Esto vamos a considerar que es dinero). Usa un bucle (tú decides cuál).
* Simulemos 3 retiros de dinero con cantidades diferentes. En cada vuelta del bucle, si hay saldo suficiente, resta la cantidad al valor
* del saldo e imprime en pantalla el saldo retirado y el saldo que queda.
* Si no alcanza, imprime "Saldo insuficiente" y detén el programa saliendo del bucle.
* */
console.log("\n")
let saldo = 1000, dinero = false, cont_saldo = 0;

while (!dinero && cont_saldo < 3) {
    let dineroRestar = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    if (dineroRestar <= saldo) {
        saldo -= dineroRestar;
        console.log(`Dinero disponible: ${saldo}`);
        console.log(`Dinero restado: ${dineroRestar}`);
    } else {
        console.log("Saldo insuficiente");
        dinero = true;
    }
    cont_saldo++;
}


/*
*
* 4. Tenéis dos valores guardados como strings ("42" y "8"). Si los sumas directamente,
* debería de aparecer en consola "428". Usa el métdo correspondiente para efectuar
* una suma de valores numéricos reales e imprime el resultado por consola.
*
* */
let n1 = "42", n2 = "8";
console.log(n1 + n2)
console.log(parseInt(n1) + parseInt(n2));


/*
*
* 5. Crea un objeto llamado alumno, con las claves nombre, edad y nota. Luego, Añade
* una clave llamada "aprobado" con el valor true o false si la nota es mayor o igual a 6.
* Muestra el objeto final en consola.
*
* */
let alumno = {
    nombre: "Camilo",
    edad: 28,
    nota: 7,
    // aprobado: function () {
    //     if (this.nota >= 6)
    //         console.log(true)
    //     else
    //         console.log(false)
    // }
}

// if (alumno.nota >= 6)
//     alumno.aprobado = true
// else
//     alumno.aprobado = false
// alumno.aprobado = alumno.nota >= 6 ? true : false;
alumno.aprobado = alumno.nota >= 6
console.log(alumno)


/*
*
* 6. Crea un objeto llamado producto, con las claves nombre y precio. Luego, haciendo uso de prompt()
* Añade la cantidad de articulos que tiene ese producto. Imprime el objeto final.
*
* */

let producto = {
    nombre: "P1",
    precio: 19.95
}
let cantidad = parseFloat(prompt("Introduce la cantidad")).toFixed(2)
if (isNaN(cantidad))
    producto.cantidad = 0;
else
    producto.cantidad = cantidad

console.log(producto)
