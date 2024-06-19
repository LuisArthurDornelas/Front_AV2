const express = require('express');
const paymentMethodController = require('../controllers/paymentMethodController');
const router = express.Router();

router.post('/payment-methods', paymentMethodController.createPaymentMethod);

module.exports = router;