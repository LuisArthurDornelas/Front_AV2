const paymentMethodModel = require('../models/paymentMethodModel');

const createPaymentMethod = (req, res) => {
  const { code, name, maxValue, isElectronic } = req.body;

  const newPaymentMethod = {
    code,
    name,
    maxValue,
    isElectronic,
  };

  paymentMethodModel.createPaymentMethod(newPaymentMethod, (error, results) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

    return res.status(201).json({ status: 'success', message: 'Payment method created successfully' });
  });
};

module.exports = {
  createPaymentMethod,
};
