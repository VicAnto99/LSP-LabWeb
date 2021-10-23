const express = require('express');
const router = express.Router();

const trabajoCtrl = require('../controllers/trabajos.controllers');

router.get('/', trabajoCtrl.getTrabajos);
router.post('/', trabajoCtrl.createTrabajos);
router.post('/:id', trabajoCtrl.getTrabajo);
router.put('/:id', trabajoCtrl.editTrabajo);
router.delete('/:id', trabajoCtrl.deleteTrabajo);
router.get('/Cancelado', trabajoCtrl.getCancelado);
router.get('/Enproceso', trabajoCtrl.getEnproceso);
router.get('/Entregado', trabajoCtrl.getEntregado);
router.get('/Maquilacion', trabajoCtrl.getMaquilacion);
router.get('/Recibido', trabajoCtrl.getRecibido);
router.get('/Terminado', trabajoCtrl.getTerminado);

module.exports = router;