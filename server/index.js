const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database');

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/peliculas', require('./routes/peliculas.routes'));

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});