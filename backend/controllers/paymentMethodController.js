const pool = require('../db');
const paymentMethodModel = require('../models/paymentMethodModel');

const createPaymentMethod = (req, res) => {
  const { sigla, nome, valorMaximo, meioEletronico } = req.body;

  const newPaymentMethod = {
    sigla,
    nome,
    valorMaximo,
    meioEletronico,
  };

  paymentMethodModel.createPaymentMethod(newPaymentMethod, (error, results) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

    return res.status(201).json({ status: 'success', message: 'Payment method created successfully' });
  });
};

// Controlador para obter todos os métodos de pagamento
const getAllPaymentMethods = (req, res) => {
  pool.query('SELECT * FROM meiopagamento', (error, results) => {
    if (error) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    return res.status(200).json(results);
  });
};

module.exports = {
  createPaymentMethod,
  getAllPaymentMethods
};
