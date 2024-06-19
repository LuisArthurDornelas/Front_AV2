const bcrypt = require('bcryptjs');
const clientModel = require('../models/clientModel');

const registerClient = (req, res) => {
  const { email, password, name, cpf, birthdate, phone, maritalStatus, education } = req.body;

  console.log('Request body:', req.body);

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }

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

    console.log('New client:', newClient);

    clientModel.createClient(newClient, (error, results) => {
      if (error) {
        console.error('Error creating client:', error);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }

      return res.status(201).json({ status: 'success', message: 'Client registered successfully' });
    });
  });
};

module.exports = {
  registerClient,
};
