class Monitor{
    static contadorMonitores = 0;
    
    constructor(marca, size){
        this._marca = marca;
        this._size = size;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }
    get size(){
        return this._size
    }

    set marca(marca){
        this._marca = marca
    }

    set size(size){
        this._size = size
    }
    set idMonitor(idMonitor){
        this._idMonitor = idMonitor
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, size: ${this.size}]`
    }
}

let monitor1 = new Monitor("Dell", "15'");
//console.log(monitor1);


module.exports = Monitor;