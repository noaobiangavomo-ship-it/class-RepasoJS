const separator = () => {
    console.log("\n\n")
}

/*
* 1. Crea una función que calcule propina en un restaurante. Debe de recibir el total
* de la cuenta y el porcentaje de propina y debe devolver la cantidad total a pagar.
* Llama la función 3 veces con valores diferentes y muestra cada resultado con 2 decimales.
* */

function calcular_propina(total, porcentaje) {
    const propina = (total * porcentaje) / 100;
    return total + propina;
}

const calc_propina = (total, porcentaje) => {
    const propina = (total * porcentaje) / 100;
    return total + propina;
}

console.log(calcular_propina(100, 10));
console.log(`${calc_propina(100, 15)}€ de propina`);
separator()

/*
* 2. Crea una función llamada saludar que reciba un nombre y una hora (del 0 al 23). Según
* la hora debe devolver "Buenos días [NOMBRE]", "Buenas tardes [NOMBRE]",
* "Buenas noches [NOMBRE]". Hazla con Arrow Functions.
* */

const saludar = (nombre, hora) => {
    let msg;
    if (6 <= hora && hora < 14) {
        msg = "Buenos días, "
    } else if (14 <= hora && hora < 20) {
        msg = "Buenas tardes, "
    } else {
        msg = "Buenas noches, "
    }
    return msg + nombre;
}

console.log(saludar("Camilo", 11))
separator()

/*
* 3. Crea 3 funciones:
*   - aplicarDescuento(precio, porcentaje) que retorne el precio con descuento.
*   - calcularIva(precio) que añada un 21%
*   - resumenCompra(nombre, precio, descuento) sin return que use los dos anteriores
*     y muestre por consola el precio original, el precio con descuento y el precio
*     final con IVA
* */

const aplicarDescuento = (precio, porcentaje) => {
    const descuento = (precio * porcentaje) / 100;
    return precio - descuento;
}

const calcularIva = (precio) => {
    return precio * 1.21;
}

const resumenCompra = (nombre, precio, descuento) => {
    let precioConDescuento = aplicarDescuento(precio, descuento)
    console.log(" ###### ")
    console.log("Producto: ", nombre)
    console.log("Precio original: ", precio);
    console.log("Precio con descuento: ", precioConDescuento);
    console.log("Precio final: ", calcularIva(precioConDescuento).toFixed(2))
}

resumenCompra("Monitor", 100.00, 15);
separator()

/*
* 4. Crea las notas de un alumno que reciba un nombre como primer parámetro y luego
* cualquier cantidad de notas. Debe calcular el promedio de las notas y mostrar por
* consola ej: "Ana - Promedio: 7.50 - Aprobado". Puede ser Aprobado / Suspenso si el
* promedio es >= 5.
* */

const calcularNotas = (nombre, ...notas) => { // ...notas => [n. elementos] siendo n => 0 o infinito

    let sumaTotal = 0;
    // for (let i = 0; i < notas.length; i++) { sumaTotal += notas[i];}
    for (let nota of notas) {
        sumaTotal += nota;
    }

    let media = notas.length > 0 ? sumaTotal / notas.length : 0;
    let haAprobado = media >= 5 ? "Aprobado" : "Suspenso"; // Aprobado / Suspenso
    console.log(`${nombre} - Media: ${media} - ${haAprobado}`)
}
calcularNotas("Camilo")
separator()

/*
* 5. Crea una función pedido que reciba el cliente como primer parámetro y luego
* la cantidad de productos (string). La función debe mostrar en consola el nombre
* del cliente, cuantos productos pidió y listar cada uno de ellos.
* Si no pidió nigún producto, mostrar "Sin productos en el pedido".
*
* Ejemplo de salida:
*   Cliente: Marta
*   Total productos: 3
*   1. Café
*   2. Tostada
*   3. Zumo
* */

const pedido = (cliente, ...productos) => {
    console.log(`Cliente: ${cliente}`);
    console.log("Total de productos: ", productos.length)

    if (productos.length > 0) {
        for (let i = 0; i < productos.length; i++) {
            console.log(`\t ${(i+1)}. ${productos[i]}`);
        }
    }
    else
        console.log("\t - No hay productos")
}

pedido("Camilo", "Café", "Tostada", "Zumo")
separator()
pedido("Juan", )