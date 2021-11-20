export class Pagos {

    constructor(_id='',nombre='',nombre_cliente='',metodo='',costo='',adelanto='',restante='',createdAt=''){
        this._id = _id;
        this.nombre = nombre;
        this.nombre_cliente = nombre_cliente;
        this.metodo = metodo;
        this.costo = costo;
        this.adelanto = adelanto;
        this.restante = restante;
        this.createdAt = createdAt;
    }

    _id!: string;
    nombre!: string;
    nombre_cliente!: string;
    metodo!: string;
    costo!: string;
    adelanto!: string;
    restante!: string;
    createdAt!: string;
}
