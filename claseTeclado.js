const DispositivoEntrada  = require('./dispositivoEntrada.js');

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    set idTeclado(idTeclado){
        this._idTeclado = idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

let teclado1 = new Teclado('Wireless', 'Asus');
//console.log(teclado1);


module.exports = Teclado;