const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
//Registrar y entrar
const user = require('../models/user');
//Editar y obtener datos
const userCtrl = require('../controllers/users.controllers');

router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

router.post('/registrar', async (req, res) =>{
    const {email, password, name, last_name, mom_last_name, edad, numero_telefonico} = req.body;
    if(email === "") return res.status(401).send("Datos vacios");
    if(password === "") return res.status(401).send("Datos vacios");
    if(name === "") return res.status(401).send("Datos vacios");
    if(last_name === "") return res.status(401).send("Datos vacios");
    if(mom_last_name === "") return res.status(401).send("Datos vacios");
    if(edad === "") return res.status(401).send("Datos vacios");
    if(numero_telefonico === "") return res.status(401).send("Datos vacios");
    const newUser = new user({email, password, name, last_name, mom_last_name, edad, numero_telefonico});
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secretallave');
    return res.status(200).send({token,
        id: newUser._id,
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        last_name: newUser.last_name,
        mom_last_name: newUser.mom_last_name,
        edad: newUser.edad,
        numero_telefonico: newUser.numero_telefonico
    });
});

router.post('/ingresar', async (req, res) =>{
    const {email, password} = req.body;
    const usuario = await user.findOne({email});
    if(!usuario) return res.status(401).send("El correo no existe");
    if(usuario.password !== password) return res.status(401).send("Contraseña incorrecta");
    const token = jwt.sign({_id: usuario._id}, 'secretallave');
    return res.status(200).json({
        mensaje: "Token creado",
        token,
        id: usuario._id,
        email: usuario.email,
        password: usuario.password,
        name: usuario.name,
        last_name: usuario.last_name,
        mom_last_name: usuario.mom_last_name,
        edad: usuario.edad,
        numero_telefonico: usuario.numero_telefonico
    });
});

router.get('/pagos', (req, res) => {
    res.json([
        {
            _id: 1,
            cliente: 'Victor',
            descripcion: 'Pago por el trabajo Señor de los anillos',
            pago: '$1500',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 2,
            cliente: 'Raul',
            descripcion: 'Pago por el trabajo Los juegos del hambre',
            pago: '$500',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 3,
            cliente: 'Omar',
            descripcion: 'Pago por el trabajo Nutry Grago',
            pago: '$3400',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 4,
            cliente: 'Diego',
            descripcion: 'Pago por el trabajo Valorant',
            pago: '$900',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 5,
            cliente: 'Victor',
            descripcion: 'Pago por el trabajo Señor de los anillos',
            pago: '$1500',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 6,
            cliente: 'Raul',
            descripcion: 'Pago por el trabajo Los juegos del hambre',
            pago: '$500',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 7,
            cliente: 'Omar',
            descripcion: 'Pago por el trabajo Nutry Grago',
            pago: '$3400',
            fecha: '2021-09-17T03:29:06.224+00:00'
        },
        {
            _id: 8,
            cliente: 'Diego',
            descripcion: 'Pago por el trabajo Valorant',
            pago: '$900',
            fecha: '2021-09-17T03:29:06.224+00:00'
        }
    ]);
});

module.exports = router;

function verifyToken(req, res, next){
    console.log(req.headers.authorization);
    if (!req.headers.authorization){
        return res.status(401).send('Unthorize Request');
    }
    const token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('Unthorize Request');
    }
    const payload = jwt.verify(token, 'secretallave');
    req.userId = payload._id;
    
    next();
    //if(!req.headers.authorization)
}
