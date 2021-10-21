const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProveedorSchema = new Schema({
    nombre: {type: String, required: true},
    numero_telefonico: {type: String, required: true},
    correo: {type: String, required: true},
    rfc: {type: String, required: true},
    dirreccion: {type: String, required: true}
});

module.exports = mongoose.model('proveedores', ProveedorSchema);