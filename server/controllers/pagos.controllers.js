const Pagos = require('../models/pagos');
const pagosCtrl = { };

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
pagosCtrl.editPagos = async (req, res) => {
    const {id} = req.params;
};