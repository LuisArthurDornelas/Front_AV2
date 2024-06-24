const pool = require('../db');

const createClient = (client, callback) => {
  const { email, senha, nome, cpf, dataNascimento, telefone, estadoCivil, escolaridade } = client;
  console.log('Creating client in database:', client);
  pool.query(
    'INSERT INTO cliente (email, senha, nome, cpf, dataNascimento, telefone, estadoCivil, escolaridade) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [email, senha, nome, cpf, dataNascimento, telefone, estadoCivil, escolaridade],
    (error, results) => {
      if (error) {
        console.error('Database error:', error);
      }
      callback(error, results);
    }
  );
};

module.exports = {
  createClient,
};
