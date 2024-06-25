const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

router.post('/', clientController.registerClient);

module.exports = router;
