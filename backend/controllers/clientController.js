const pool = require('../db');

const registerClient = (req, res) => {
  const { email, senha, nome, cpf, dataNascimento, telefone, estadoCivil, escolaridade } = req.body;

  console.log('Request body:', req.body);

  const newClient = {
    email,
    senha,
    nome,
    cpf,
    dataNascimento,
    telefone,
    estadoCivil,
    escolaridade,
  };

  console.log('New client:', newClient);

  pool.query('INSERT INTO cliente SET ?', newClient, (error, results) => {
    if (error) {
      console.error('Error creating client:', error);
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }

    return res.status(201).json({ status: 'success', message: 'Client registered successfully' });
  });
};

module.exports = {
  registerClient,
};
