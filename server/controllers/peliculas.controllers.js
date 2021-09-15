const Pelicula = require('../models/pelicula');
const peliculasCtrl = { };

peliculasCtrl.getPeliculas = (req, res) => {
    Pelicula.find();
}
peliculasCtrl.createPeliculas = function (){

}
peliculasCtrl.getPelicula = function (){

}
peliculasCtrl.editPelicula = function(){

}
peliculasCtrl.deletePelicula = function(){

}

module.exports = peliculasCtrl;