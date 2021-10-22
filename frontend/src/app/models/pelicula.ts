export class Pelicula {

    constructor(_id='', tipo='', medida='', provedor='', unidades=''){
        this._id = _id;
        this.tipo = tipo;
        this.medida = medida;
        this.provedor = provedor;
        this.unidades = unidades;
    }

    _id!: string;
    tipo!: string;
    medida!:string;
    provedor!: string;
    unidades!: string;
}
