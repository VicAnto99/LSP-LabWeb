const express = require('express');
const router = express.Router();

const peliCtrl = require('../controllers/peliculas.controllers');

router.get('/', peliCtrl.getPeliculas);
router.post('/', peliCtrl.createPeliculas);
router.post('/:id', peliCtrl.getPelicula);
router.put('/:id', peliCtrl.editPelicula);
router.delete('/:id', peliCtrl.deletePelicula);

module.exports = router;