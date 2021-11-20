const Pagos = require('../models/pagos');
const pagosCtrl = { };

pagosCtrl.getPagos = async (req, res) => {
    const pagos = await Pagos.find();
    res.json(pagos);
};
pagosCtrl.createPagos = async (req, res) => {
    console.log(req.body);
    const pagos = new Pagos({
        nombre: req.body.nombre,
        nombre_cliente: req.body.nombre_cliente,
        metodo: req.body.metodo,
        costo: req.body.costo,
        adelanto: req.body.adelanto,
        restante: req.body.restante
    });
    await pagos.save();
    res.json({
        mensaje: "Pago creado",
        pagos: pagos
    });
};
pagosCtrl.getPago = async (req, res) => {
    const pago = await Pagos.findById(req.body.id);
    res.json({
        mensaje: "Pago encontrado",
        pago: pago
    });
};
pagosCtrl.editPagos = async (req, res) => {
    const {id} = req.params;
    const pago = {
        nombre: req.body.nombre,
        nombre_cliente: req.body.nombre_cliente,
        metodo: req.body.metodo,
        costo: req.body.costo,
        adelanto: req.body.adelanto,
        restante: req.body.restante
    }
    await Pagos.findByIdAndUpdate(id, {$set: pago}, {new: true});
    res.json({
        mensaje: "Pago creado",
        pago: pago
    });
};
pagosCtrl.deletePagos = async (req, res) => {
    const {id} = req.params;
    await Pagos.findByIdAndRemove(id);
    res.json({
        mensaje: "Pago borrado"
    });
};

module.exports = pagosCtrl;