const Monitor = require('./claseMonitor.js');
const Teclado = require('./claseTeclado');
const Raton = require('./claseRaton.js')

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre(){
        return this._nombre
    }
    get monitor(){
        return this._monitor
    }
    get teclado(){
        return this._teclado
    }
    get raton(){
        return this._raton
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora: [idComputadora: ${this._idComputadora}, nombre: ${this._nombre}, monitor: ${this._monitor}, teclado: ${this._teclado}, raton: ${this._raton}]`
    }
}

let monitor1 = new Monitor("Dell", "15'");
let teclado1 = new Teclado('Wireless', 'Asus');
let raton1 = new Raton('wireless', 'genius');


let computadora1 = new Computadora('Asus', monitor1, teclado1, raton1);
//console.log(computadora1.toString());


module.exports = Computadora;