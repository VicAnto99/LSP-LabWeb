const express = require('express');
const router = express.Router();

const trabajoCtrl = require('../controllers/trabajos.controllers');

router.get('/', trabajoCtrl.getTrabajos);
router.post('/', trabajoCtrl.createTrabajos);
router.post('/:id', trabajoCtrl.getTrabajo);
router.put('/:id', trabajoCtrl.editTrabajo);
router.delete('/:id', trabajoCtrl.deleteTrabajo);

module.exports = router;