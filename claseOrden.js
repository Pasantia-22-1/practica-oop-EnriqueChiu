const Computadora = require('./claseComputadora.js');
const Monitor = require('./claseMonitor.js');
const Teclado = require('./claseTeclado');
const Raton = require('./claseRaton.js');

class Orden{
    static contadorOrdenes = 0;
    
    constructor(){
        this._computadoras= [];
        this._idOrden = ++Orden.contadorOrdenes;
    }

    get computadora(){
        return this._computadoras;
    }
    get orden(){
        return this._idOrden;
    }

    set computadora(computadora){
        this._computadoras = computadora;
    }
    set orden(orden){
        this._idOrden = orden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        console.log(`Orden: [idOrden: ${this._idOrden}, ${this._computadoras}]`);
        
    }
    toString(){
        return `Orden: [idOrden: ${this._idOrden}, ${this._computadoras}`;
    }
}

let monitor1 = new Monitor("Dell", "15'");
let teclado1 = new Teclado('Wireless', 'Asus');
let raton1 = new Raton('wireless', 'genius');


let computadora1 = new Computadora('Asus', monitor1, teclado1, raton1);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();