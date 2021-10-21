const Cliente = require('../models/cliente');
const clientesCtrl = {};

clientesCtrl.getClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};
clientesCtrl.createClientes = async (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        rfc: req.body.rfc,
        numero_telefonico: req.body.numero_telefonico,
        domicilio: req.body.domicilio
    });
    await cliente.save();
    res.json({
        mensaje: "Cliente creado",
        cliente: cliente
    });
};
clientesCtrl.getCliente = async (req, res) => {
    const cliente = await Cliente.findById(req.body.id);
    res.json({
        mensaje: "Cliente encontrado",
        cliente: cliente
    });
};
clientesCtrl.editCliente = async (req, res) => {
    const {id} = req.params;
    const cliente = {
        nombre: req.body.nombre,
        rfc: req.body.rfc,
        numero_telefonico: req.body.numero_telefonico,
        domicilio: req.body.domicilio
    }
    await Cliente.findByIdAndUpdate(id, {$set: cliente}, {new: true});
    res.json({
        mensaje: "Cliente editado",
        cliente: cliente
    });
};
clientesCtrl.deleteCliente = async (req, res) =>{
    const {id} = req.params;
    await Cliente.findByIdAndRemove(id);
    res.json({
        mensaje: "Cliente eliminado"
    });
};

module.exports = clientesCtrl;