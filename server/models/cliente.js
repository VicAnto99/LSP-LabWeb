const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    nombre: {type: String, required: true},
    rfc: {type: String, required: true},
    numero_telefonico: {type: String, required: true},
    domicilio: {type: String, required: true}
});

module.exports = mongoose.model('clientes', ClienteSchema);