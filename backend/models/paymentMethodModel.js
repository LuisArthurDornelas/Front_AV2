const pool = require('../db');

const createPaymentMethod = (paymentMethod, callback) => {
  const { sigla, nome, valorMaximo, meioEletronico } = paymentMethod;
  pool.query(
    'INSERT INTO meiopagamento (sigla, nome, valorMaximo, meioEletronico) VALUES (?, ?, ?, ?)',
    [sigla, nome, valorMaximo, meioEletronico],
    callback
  );
};

module.exports = {
  createPaymentMethod,
};
