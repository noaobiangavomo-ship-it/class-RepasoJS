
class Persona {

    constructor(nombre, correo, edad) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }

    esMayorEdad() {
        return this.edad >= 18;
    }

}

persona1 = new Persona("Camilo", "camilo@gmail.com", 28);
console.log(persona1.esMayorEdad())

class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    hayStock() {
        return this.stock > 0;
    }

    descuento(porcentaje) {
        return (this.precio - ((this.precio * porcentaje) / 100)).toFixed(2);
    }

    toString() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, stock: ${this.stock}`;
    }

}


let p1 = new Producto("Producto 1", 5.99, 5);
console.log(p1.toString())
console.log(p1.hayStock())
console.log(p1.descuento(10))

/*
*
*
* Crea una clase llamada HotelReservation que gestione habitaciones, reservas, disponibilidad y pagos.

Estado interno por objeto:
 - roomNumber
 - pricePerNight
 - isAvailable (true/false)
 - guestName (por defecto null)
 - nights (número de noches, por defecto 0)

Métodos obligatorios:
 - book(guestName, nights) =>
    a) Si isAvailable es false, mostrar: Room X is not available.
    b) Si está disponible:
        * Guardar el nombre, el número de noches
        * Cambiar isAvailable → false
        * Mostrar: Room X reserved for Ana (3 nights)
 - checkout() =>
    a) Si la habitación ya estaba libre mostrar: Room X is already free.
    b) Si había reserva, mostrar: Guest Ana checked out. Total: 240€
 - info() =>
    a) Muestra: Room 101 | Price: 80€/night | Available: true
    b) o si está ocupada: Room 101 | Occupied by Ana (3 nights)

Crea un array para probar la clase:
let rooms = [
  new HotelReservation(101, 80),
  new HotelReservation(102, 60),
  new HotelReservation(201, 120)
];

Usa métodos de arrays:
filter → habitaciones disponibles
find → encontrar habitación por número
reduce → total ganado tras varios checkouts (No pasa nada si no lo conseguís)

*
* */

class HotelReservation {
    constructor(roomNumber, pricePerNight) {
        this.roomNumber = roomNumber;
        this.pricePerNight = pricePerNight;
        this.isAvailable = true;
        this.guestName = null;
        this.nights = 0;
    }

    book(guestName, nights) {
        if (this.isAvailable === false) {
            console.log(`Room ${this.roomNumber} is not available.`);
        } else {
            this.guestName = guestName;
            this.nights = nights;
            this.isAvailable = false;

            console.log(
                `Room ${this.roomNumber} reserved for ${guestName} (${nights} nights)`
            );
        }
    }

    checkout() {
        if (this.isAvailable === true) {
            console.log(`Room ${this.roomNumber} is already free.`);
        } else {
            const total = this.pricePerNight * this.nights;

            console.log(
                `Guest ${this.guestName} checked out. Total: ${total}€`
            );

            this.isAvailable = true;
            this.guestName = null;
            this.nights = 0;

            return total;
        }

        return 0;
    }

    info() {
        if (this.isAvailable === true) {
            console.log(
                `Room ${this.roomNumber} | Price: ${this.pricePerNight}€/night | Available: true`
            );
        } else {
            console.log(
                `Room ${this.roomNumber} | Occupied by ${this.guestName} (${this.nights} nights)`
            );
        }
    }
}

// Creamos las habitaciones
let rooms = [
    new HotelReservation(101, 80),
    new HotelReservation(102, 60),
    new HotelReservation(201, 120)
];

// Reservamos habitaciones
rooms[0].book("Ana", 3);
rooms[1].book("Luis", 2);

// Mostramos información
rooms[0].info();
rooms[1].info();
rooms[2].info();

// filter: habitaciones disponibles
const disponibles = rooms.filter(room => room.isAvailable === true);

console.log("Habitaciones disponibles:");
console.log(disponibles);

// find: buscar una habitación por número
const habitacion = rooms.find(room => room.roomNumber === 101);

console.log("Habitación encontrada:");
habitacion.info();

// Checkout y cálculo de ingresos
let ingresos = 0;

ingresos += rooms[0].checkout();
ingresos += rooms[1].checkout();

console.log(`Total ganado: ${ingresos}€`);
