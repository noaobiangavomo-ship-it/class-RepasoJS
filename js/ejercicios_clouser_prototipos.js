// CLOSURES Y PROTOTIPOS -> Haced todos los ejercicios con ambas formas

/*
*
* 1. Calculadora
*
* Crea una calculadora que recuerde el resultado en memoria. Debe de tener los métodos suma(), resta(), resultado().
*
* */

function calculadora(valorinicial=0){
    let memoria=valorinicial;
    return{
        suma:function(valor){
            memoria+=valor;
        },
        resta:function(valor){
            memoria-=valor;
        },
        resultado:function (){
         return memoria;
        }
    }
}

const c=calculadora(10);
c.suma(5)
c.resta(2);
console.log(c.resultado());


function Calculadora2(valorinicial=0){
    this.memoria=valorinicial;
}
Calculadora2.prototype.suma=function(valor){
    this.memoria+=valor;
}
Calculadora2.prototype.resta=function (valor){
    this.memoria-=valor;
}
Calculadora2.prototype.resultado=function (){
    return this.memoria;
}

const c2=new Calculadora2(8);
c2.suma(4);
c2.resta(2);
console.log(c2.memoria);

/*
*
* 2. Sistema de Login
*
* Crea un sistema que permita hasta 3 intentos. Si se superan, bloquea la cuenta. Crea los atributos/variables y
* funciones que consideres que son necesarias para desarrollar este ejercicio.
*
* */


function Login() {
    let usuario = "ana";
    let pwd = 123;
    let intentos = 0

    function loginin(user, passwd ) {
        if (intentos >= 3){
            console.log("usuario bloqueado")
            return;
        }
        if (usuario !== user || pwd !== passwd) {
            intentos++
            console.log("datos incorrectos")
        }
        else{
            console.log("usuario logiado")
        }

    }
    return {
        loginin
    }
}
const cuenta = Login();
cuenta.loginin("pedro", 1458);
cuenta.loginin("pedro", 1458);
cuenta.loginin("ana", 123);

function Login1(){
    this.usuario = "ana";
    this.passwd = 123;
    this.intentos = 0;
}
Login1.prototype.loginin = function(user, pwd){
    if (this.intentos >= 3){
        console.log("usuario bloqueado")
        return;
    }
    if (this.usuario !== user || pwd !== this.passwd) {
        this.intentos++
        console.log("datos incorrectos")

    }
    else{
        console.log("usuario logiado")
    }
}

const cuenta2 = new Login1();
cuenta2.loginin("pedro", 1458);
cuenta2.loginin("pedro", 1458);
cuenta2.loginin("ana", 123);