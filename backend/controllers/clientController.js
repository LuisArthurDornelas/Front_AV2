const clientModel = require('../models/clientModel');

const registerClient = (req, res) => {
  const client = req.body;
  clientModel.createClient(client, (error, results) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Database error' });
    res.json({ status: 'success' });
  });
};

module.exports = {
  registerClient,
};
