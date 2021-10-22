export class Cliente {

    constructor(_id='', nombre='', rfc='', numero_telefonico='', domicilio=''){
        this._id = _id;
        this.nombre = nombre;
        this.rfc = rfc;
        this.numero_telefonico = numero_telefonico;
        this.domicilio = domicilio;
    }

    _id!: string;
    nombre!: string;
    rfc!:string;
    numero_telefonico!: string;
    domicilio!: string;
}

