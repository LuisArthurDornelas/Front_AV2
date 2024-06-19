const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

router.post('/clients', clientController.registerClient);

module.exports = router;
