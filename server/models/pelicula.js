const mongoose = require('mongoose');
const {Schema} = mongoose;

const PeliculaSchema = new Schema({
    tipo: {type: String, required: true},
    medida: {type: String, required: true},
    provedor: {type: String, required: true},
    unidades: {type: Number, required: true}
});

module.exports = mongoose.model('peliculas', PeliculaSchema);