const express = require('express');
const router = express.Router();

const clientCtrl = require('../controllers/clientes.controllers');

router.get('/', clientCtrl.getClientes);
router.post('/', clientCtrl.createClientes);
router.post('/:id', clientCtrl.getCliente);
router.put('/:id', clientCtrl.editCliente);
router.delete('/:id', clientCtrl.deleteCliente);

module.exports = router;