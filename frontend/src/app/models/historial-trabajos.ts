export class HistorialTrabajos {

    constructor(_id='', id_trabajo='', atributo_editado='', valor_anterior='', valor_nuevo='', usuario='', createdAt=''){
        this._id = _id;
        this.id_trabajo = id_trabajo;
        this.atributo_editado = atributo_editado;
        this.valor_anterior = valor_anterior;
        this.valor_nuevo = valor_nuevo;
        this.usuario = usuario;
        this.createdAt = createdAt;
    }

    _id!: string;
    id_trabajo!: string;
    atributo_editado!: string;
    valor_anterior!: string;
    valor_nuevo!: string;
    usuario!: string;
    createdAt!: String;
}
