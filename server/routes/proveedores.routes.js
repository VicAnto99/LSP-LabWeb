const express = require('express');
const router = express.Router();

const proveCtrl = require('../controllers/proveedores.controllers');

router.get('/', proveCtrl.getProveedores);
router.post('/', proveCtrl.createProveedor);

module.exports = router;