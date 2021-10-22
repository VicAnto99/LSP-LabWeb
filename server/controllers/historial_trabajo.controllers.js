const Historial = require('../models/historial_trabajo');
const historialCrtl = { };

historialCrtl.getHistoriales = async (req, res) => {
    const historial = await Historial.find();
    console.log(historial);
    res.json(historial);
};
historialCrtl.createHistorial = async (req, res) => {
    console.log("Sin nada"+req.body);
    const historial = new Historial({
        id_trabajo: req.body.id_trabajo,
        atributo_editado: req.body.atributo_editado,
        valor_anterior: req.body.valor_anterior,
        valor_nuevo: req.body.valor_nuevo,
        usuario: req.body.usuario
    });
    await historial.save();
    console.log("Hola"+ historial);
    res.json({
        mensaje:"Historial creado",
        pelicula: req.body,
        pelicula: historial
    });
};
historialCrtl.getHistorial = async (req, res) => {
    const historial = await Historial.find({id_trabajo: req.body.id_trabajo});
    res.json({
        mensaje: "Historial encontrado",
        pelicula: historial
    });
};
historialCrtl.editHistorial = async (req, res) => {
    const {id} = req.params;
    const historial = {
        id_trabajo: req.body.id_trabajo,
        atributo_editado: req.body.atributo_editado,
        valor_anterior: req.body.valor_anterior,
        valor_nuevo: req.body.valor_nuevo,
        usuario: req.body.usuario
    }
    await Historial.findByIdAndUpdate(id, {$set: historial}, {new: true});
    res.json({
        mensaje:"Historial actualizado",
        pelicula: historial
    });
};
historialCrtl.deleteHistorial = async (req, res) => {
    const {id} = req.params;
    await Historial.findByIdAndRemove(id);
    res.json({
        mensaje: "Historial eliminado"
    });
};

module.exports = historialCrtl;