const bcrypt = require('bcryptjs');
const clientModel = require('../models/clientModel');

const registerClient = (req, res) => {
  const { email, password, name, cpf, birthdate, phone, maritalStatus, education } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

    const newClient = {
      email,
      password: hashedPassword,
      name,
      cpf,
      birthdate,
      phone,
      maritalStatus,
      education,
    };

    clientModel.createClient(newClient, (error, results) => {
      if (error) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

      return res.status(201).json({ status: 'success', message: 'Client registered successfully' });
    });
  });
};

module.exports = {
  registerClient,
};
