const User = require('../models/user');
const usersCtrl = { };

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}
usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({user: user});
}
usersCtrl.editUser = async (req, res) => {
    const {id} = req.params;
    const user = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        last_name: req.body.last_name,
        mom_last_name: req.body.mom_last_name,
        edad: req.body.edad,
        numero_telefonico: req.body.numero_telefonico
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        mensaje:"User actualizado",
        user: user
    });
}
usersCtrl.deleteUser = async (req, res) => {
    const {id} = req.params;
    await User.findByIdAndRemove(id);
    res.json({
        mensaje: "User eliminado"
    });
}

module. exports = usersCtrl;