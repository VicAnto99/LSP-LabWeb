const mongoose = require('mongoose');
const conexion = 'mongodb+srv://VicElVock8:Mmichela99@web-lsp-proyecto.lpfap.mongodb.net/test';
mongoose.connect(conexion)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;