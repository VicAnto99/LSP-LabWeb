const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();

const user = require('../models/user');

router.get('/', (req, res) => res.send('Hola mundo'));

router.post('/registrar', async (req, res) =>{
    const {email, password} = req.body;
    const newUser = new user({email, password});
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secretallave');
    return res.status(200).send({token});
});

router.post('/ingresar', async (req, res) =>{
    const {email, password} = req.body;
    const usuario = await user.findOne({email});
    if(!usuario) return res.status(401).send("El correo no existe");
    if(usuario.password !== password) return res.status(401).send("Contraseña incorrecta");
    const token = jwt.sign({_id: usuario._id}, 'secretallave');
    return res.status(200).json({token});
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

router.get('/pagos-privados', verifyToken,(req, res) => {
    res.json([]);
});

router.get('/perfil', verifyToken, (req, res)=>{
    res.send(req.userId);
})

module.exports = router;

function verifyToken(req, res, next){
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
    console.log(payload);
    //if(!req.headers.authorization)
}
