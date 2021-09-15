const mongoose = require('mongoose');
const conexion = 'mongodb://localhost:27017/lsp-lab-web';
mongoose.connect(conexion)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;