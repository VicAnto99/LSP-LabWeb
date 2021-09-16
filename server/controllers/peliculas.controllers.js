const Pelicula = require('../models/pelicula');
const peliculasCtrl = { };

peliculasCtrl.getPeliculas = async (req, res) => {
    const peliculas = await Pelicula.find();
    res.json({
        mensaje:"Peliculas mostradas",
        peliculas: peliculas});
};
peliculasCtrl.createPeliculas = async (req, res) => {
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.json({
        mensaje:"Pelicula creada",
        pelicula: pelicula});
};
peliculasCtrl.getPelicula = async (req, res) => {
    const pelicula = await Pelicula.findById(req.body.id);
    res.json({
        mensaje:"Pelicula encontrada",
        pelicula: pelicula});
};
peliculasCtrl.editPelicula = async (req, res) => {
    const {id} = req.params;
    const pelicula = {
        tipo: req.body.tipo,
        medida: req.body.medida,
        provedor: req.body.provedor,
        unidades: req.body.unidades
    }
    await Pelicula.findByIdAndUpdate(id, {$set: pelicula}, {new: true});
    res.json({
        mensaje:"Pelicula actualizada",
        pelicula: pelicula});
};
peliculasCtrl.deletePelicula = async (req, res) => {
    const {id} = req.params;
    await Pelicula.findByIdAndRemove(id);
    res.json({
        mensaje:"Pelicula eliminada"});
};

module.exports = peliculasCtrl;