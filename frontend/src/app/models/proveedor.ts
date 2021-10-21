export class Proveedor {

    constructor(_id='', nombre='', numero_telefonico='', correo='', rfc='', dirreccion=''){
        this._id = _id;
        this.nombre = nombre;
        this.numero_telefonico = numero_telefonico;
        this.correo = correo;
        this.rfc = rfc;
        this.dirreccion = dirreccion;
    }

    _id!: string;
    nombre!: string;
    numero_telefonico!: string;
    correo!: string;
    rfc!: string;
    dirreccion!: string;

}
