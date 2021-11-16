const express = require('express');
const router = express.Router();

const trabajoCtrl = require('../controllers/trabajos.controllers');

router.get('/', trabajoCtrl.getTrabajos);
router.post('/', trabajoCtrl.createTrabajos);
router.post('/:id', trabajoCtrl.getTrabajo);
router.put('/:id', trabajoCtrl.editTrabajo);
router.delete('/:id', trabajoCtrl.deleteTrabajo);
router.get('/Cancelado', trabajoCtrl.getCancelado);
router.get('/CanceladoCount', trabajoCtrl.getCanceladoCount);
router.get('/Enproceso', trabajoCtrl.getEnproceso);
router.get('/EnprocesoCount', trabajoCtrl.getEnprocesoCount);
router.get('/Entregado', trabajoCtrl.getEntregado);
router.get('/EntregadoCount', trabajoCtrl.getEntregadoCount);
router.get('/Maquilacion', trabajoCtrl.getMaquilacion);
router.get('/MaquilacionCount', trabajoCtrl.getMaquilacionCount);
router.get('/Recibido', trabajoCtrl.getRecibido);
router.get('/RecibidoCount', trabajoCtrl.getRecibidoCount);
router.get('/Terminado', trabajoCtrl.getTerminado);
router.get('/TerminadoCount', trabajoCtrl.getTerminadoCount);

module.exports = router;