const Proveedor = require('../models/proveedor');
const proveedorCtrl = { };

proveedorCtrl.getProveedores = async (req , res) => {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
}
proveedorCtrl.createProveedor = async (req, res) => {
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        numero_telefonico: req.body.numero_telefonico,
        correo: req.body.correo,
        rfc: req.body.rfc,
        dirreccion: req.body.dirreccion
    });
    await prueba.save();
    res.json({
        mensaje: "Proveedor creado",
        proveedor: proveedor
    });
}
proveedorCtrl.getProveedor = async (req, res) => {
    const proveedor = await Proveedor.findById(req.body.id);
    res.json({
        mensaje: "Proveedor encotrado",
        proveedor: proveedor
    });
}
proveedorCtrl.editProveedor = async (req, res) => {
    const {id} = req.params;
    const proveedor = {
        nombre: req.body.nombre,
        numero_telefonico: req.body.numero_telefonico,
        correo: req.body.correo,
        rfc: req.body.rfc,
        dirreccion: req.body.dirreccion
    }
    await Proveedor.findByIdAndUpdate(id, {$set: proveedor}, {new: true});
    res.json({
        mensaje:"Proveedor actualizado",
        pelicula: proveedor});
}
proveedorCtrl.deleteProveedor = async (req, res) => {
    const {id} = req.params;
    await Proveedor.findByIdAndRemove(id);
    res.json({
        mensaje:"Proveedor eliminada"});
}

module.exports = proveedorCtrl;