const express = require('express');
const serviceController = require('../controllers/serviceController');
const router = express.Router();

router.get('/services', serviceController.getServices);

module.exports = router;
