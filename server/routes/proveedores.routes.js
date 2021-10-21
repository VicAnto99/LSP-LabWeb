const express = require('express');
const router = express.Router();

const proveCtrl = require('../controllers/proveedores.controllers');

router.get('/', proveCtrl.getProveedores);
router.post('/', proveCtrl.createProveedor);
router.post('/:id', proveCtrl.getProveedor);
router.put('/:id', proveCtrl.editProveedor);
router.delete('/:id', proveCtrl.deleteProveedor);

module.exports = router;