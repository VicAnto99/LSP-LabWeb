const mongoose = require('mongoose');
const {Schema} = mongoose;

const Historial_trabajoSchema = new Schema({
    id_trabajo: {type: String, required: true},
    atributo_editado: {type: String, required: true},
    valor_anterior: {type: String, required: true},
    valor_nuevo: {type: String, required: true},
    usuario: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('historial_trabajos', Historial_trabajoSchema);