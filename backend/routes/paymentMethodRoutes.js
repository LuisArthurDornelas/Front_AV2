const express = require('express');
const paymentMethodController = require('../controllers/paymentMethodController');
const router = express.Router();

router.post('/', paymentMethodController.createPaymentMethod);
router.get('/', paymentMethodController.getAllPaymentMethods);

module.exports = router;
