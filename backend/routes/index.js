const express = require('express');
const authController = require('../controllers/authController');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.post('/auth', authController.authenticate);
router.post('/clients', clientController.registerClient);

// Adicionar mais rotas conforme necessário

module.exports = router;
