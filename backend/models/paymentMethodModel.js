const pool = require('../db');

const createPaymentMethod = (paymentMethod, callback) => {
  const { code, name, maxValue, isElectronic } = paymentMethod;
  pool.query(
    'INSERT INTO payment_methods (code, name, maxValue, isElectronic) VALUES (?, ?, ?, ?)',
    [code, name, maxValue, isElectronic],
    callback
  );
};

module.exports = {
  createPaymentMethod,
};
