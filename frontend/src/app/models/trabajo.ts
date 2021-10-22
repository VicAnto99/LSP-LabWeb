export class Trabajo {

    constructor(_id='', nombre='', cliente_nombre='', medida_papel='', material_id='', material_tipo='', material_medida='', proceso='', costo='', pago=''){
        this._id = _id;
        this.nombre = nombre;
        this.cliente_nombre = cliente_nombre;
        this.medida_papel = medida_papel;
        this.material_id = material_id;
        this.material_tipo = material_tipo;
        this.material_medida = material_medida;
        this.proceso = proceso;
        this.costo = costo;
        this.pago = pago;
    }

    _id!: string;
    nombre!: string;
    cliente_nombre!: string;
    medida_papel!: string;
    material_id!: string;
    material_tipo!: string;
    material_medida!: string;
    proceso!: string;
    costo!: string;
    pago!: string;

}
