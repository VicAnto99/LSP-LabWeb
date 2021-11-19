const mongoose = require('mongoose');
const {Schema} = mongoose;

const PagosSchema = new Schema({
    nombre: {type: String, required: true},
    nombre_cliente: {type: String, required: true},
    metodo: {type: String, required: true},
    costo: {type: String, required: true},
    adelanto: {type: String, required: true},
    restante: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('pagos', PagosSchema);