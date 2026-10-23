(function saludar() {
    console.log("Hola mundo")
})()

let cont = 1

// setInterval(() => {
//     console.log("CONT", cont)
//     cont++;
// }, 2000)
//
// setTimeout(() => {
//     console.log("Esto es setTimeout")
// }, 2000)

// Función de orden superior o callback

const suma = (n1, n2) => {
    return n1 + n2
}
const resta = (n1, n2) => {
    return n1 - n2
}

function oper_valores(n1, n2, fn) {
    let oper = fn(n1, n2)
    console.log(oper)
}

oper_valores(1, 2, suma)
oper_valores(5, 4, resta)


