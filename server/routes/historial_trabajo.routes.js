const express = require('express');
const router = express.Router();

const hisCrtl = require('../controllers/historial_trabajo.controllers');

router.get('/', hisCrtl.getHistoriales);
router.post('/', hisCrtl.createHistorial);
router.get('/:id', hisCrtl.getHistorial);
router.post('/:id', hisCrtl.getHistorial);
router.put('/:id', hisCrtl.editHistorial);
router.delete('/:id', hisCrtl.deleteHistorial);

module.exports = router;