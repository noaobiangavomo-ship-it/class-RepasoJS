// function exterior() {
//
//     let saludo = "Hola mundo";
//
//     function interior() {
//         console.log(saludo + ", nombre: Camilo");
//     }
//
//     return {
//         generico: saludo,
//         interior
//     };
// }
//
// let ejemplo = exterior(); // {generico: saludo, interior: interior}
//
// console.log(ejemplo["generico"]);
// console.log(ejemplo.generico);
// ejemplo.interior()

function base_de_datos() {
    let carrito = []; // []

    function add_producto(nombre) {
        carrito.push(nombre);
    }

    function del_producto(nombre) {
        carrito = carrito.filter(item => { if (item !== nombre) { return item; }})
    }

    function borrar_carrito() {
        carrito = []
    }

    function list_productos() {
        console.log(carrito.length);
        carrito.forEach(producto => {
            console.log(producto);
        })
    }


    return {
        carrito,
        listar: list_productos,
        add_producto,
        del_producto,
        borrar_carrito
    }
}


const ddbb = base_de_datos();
ddbb.listar()

ddbb.add_producto("Perrito caliente")
ddbb.listar()
ddbb.add_producto("Pizza")
ddbb.listar()
ddbb.del_producto("Perrito caliente")
ddbb.listar()
ddbb.add_producto("Perrito caliente")
ddbb.listar()
ddbb.borrar_carrito()
ddbb.listar()