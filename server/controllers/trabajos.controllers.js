const Trabajo = require('../models/trabajo');
const trabajosCtrl = { };

trabajosCtrl.getTrabajos = async (req, res) => {
    const trabajos = await Trabajo.find();
    res.json(trabajos);
};
trabajosCtrl.createTrabajos = async (req, res) => {
    console.log(req.body);
    const trabajo = new Trabajo({
        nombre: req.body.nombre,
        cliente_nombre: req.body.cliente_nombre,
        medida_papel: req.body.medida_papel,
        material_id: req.body.material_id,
        material_tipo: req.body.material_tipo,
        material_medida: req.body.material_medida,
        proceso: req.body.proceso,
        costo: req.body.costo,
        pago: req.body.pago
    });
    await trabajo.save();
    res.json({
        mensaje: "Trabajo creado",
        trabajo: trabajo
    });
};
trabajosCtrl.getTrabajo = async (req, res) => {
    const trabajo = await Trabajo.findById(req.body.id);
    res.json({
        mensaje: "Trabajo encontrada",
        trabajo: trabajo
    });
};
trabajosCtrl.editTrabajo = async (req, res) => {
    const {id} = req.params;
    const trabajo = {
        nombre: req.body.nombre,
        cliente_nombre: req.body.cliente_nombre,
        medida_papel: req.body.medida_papel,
        material_id: req.body.material_id,
        material_tipo: req.body.material_tipo,
        material_medida: req.body.material_medida,
        proceso: req.body.proceso,
        costo: req.body.costo,
        pago: req.body.pago
    }
    await Trabajo.findByIdAndUpdate(id, {$set: trabajo}, {new: true});
    res.json({
        mensaje: "Trabajo actualizado",
        trabajo: trabajo
    });
};
trabajosCtrl.deleteTrabajo = async (req, res) => {
    const {id} = req.params;
    await Trabajo.findByIdAndRemove(id);
    res.json({
        mensaje: "Trabajo editado"
    });
};

module.exports =  trabajosCtrl;