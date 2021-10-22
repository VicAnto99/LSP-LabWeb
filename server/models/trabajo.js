const mongoose = require('mongoose');
const {Schema} = mongoose;

const TrabajoSchema = new Schema({
    nombre: {type: String, required: true},
    cliente_nombre: {type: String, required: true},
    medida_papel: {type: String, required: true},
    material_id: {type: String, required: true},
    material_tipo: {type: String, required: true},
    material_medida: {type: String, required: true},
    proceso: {type: String, required: true},
    costo: {type: String, required: true},
    pago: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('trabajo', TrabajoSchema);