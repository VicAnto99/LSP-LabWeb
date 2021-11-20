const express = require('express');
const router = express.Router();

const pagosCtrl = require('../controllers/pagos.controllers');

router.get('/', pagosCtrl.getPagos);
router.post('/', pagosCtrl.createPagos);
router.post('/:id', pagosCtrl.getPago);
router.put('/:id', pagosCtrl.editPagos);
router.delete('/:id', pagosCtrl.deletePagos);

module.exports = router;