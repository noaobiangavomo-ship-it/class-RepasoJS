function saludar(nombre) {
    console.log("Hola " + nombre)
}

const saludar2 = (nombre) => {
    console.log("Hola " + nombre)
}

function suma(n1, n2) {
    return n1 + n2
}

const restar = (n1, n2) => {
    return n1 - n2
}

const multiplicar = (...valores) => { // valores es un []
    // ...valores significa que a la función puede llegarle desde "0" valores a "n" valores
    let mult = 1
    for(let i = 0; i < valores.length; i++){
        mult = mult*valores[i]
    }
    console.log(mult)
}


saludar("camilo")
saludar2("Camilo")
console.log(suma(2, 3))
console.log(restar(2, 3))

multiplicar(1, 2, 3, 4, 5, 6)


const alumno = {
    nombre: "Camilo",
    edad: 28,
    nota: 5,
    aprobado: function () {
        if (this.nota >= 5)
            console.log("Alumno aprobado")
        else
            console.log("Alumno suspenso")
    }
}

alumno.aprobado()


// Carrito
let carrito = {
    nombre: "Camilo",
    compra: [],
    dinero: [],
    addCompra: function (producto) {
        this.compra.push(producto)
    },
    addDinero: function (precio) {
        this.dinero.push(precio)
    },
    calcularTotal: function () {
        let total = 0
        for (let i = 0; i < this.dinero.length; i++) {
            total += this.dinero[i]
        }
        return total
    }
}

console.log(carrito)
carrito.addCompra("RTX 5090")
carrito.addDinero(2000)
console.log(carrito)
carrito.addCompra("Pantalla 27'")
carrito.addDinero(250)
console.log(carrito)
console.log(carrito.calcularTotal())