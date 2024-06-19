const clientModel = require('../models/clientModel');

const authenticate = (req, res) => {
  const { login, senha } = req.body;
  clientModel.getClientByLogin(login, (error, client) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Database error' });
    if (client && client.senha === senha) {
      res.json({ status: 'success' });
    } else {
      res.json({ status: 'error', message: 'Invalid credentials' });
    }
  });
};

module.exports = {
  authenticate,
};
