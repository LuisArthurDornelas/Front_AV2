const pool = require('../db');

const getClientByLogin = (login, callback) => {
  pool.query('SELECT * FROM clientes WHERE login = ?', [login], (error, results) => {
    if (error) return callback(error);
    callback(null, results[0]);
  });
};

const createClient = (client, callback) => {
  const { login, senha, nome, cpf, data_nascimento, telefone, estado_civil, escolaridade } = client;
  pool.query('INSERT INTO clientes SET ?', { login, senha, nome, cpf, data_nascimento, telefone, estado_civil, escolaridade }, (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

module.exports = {
  getClientByLogin,
  createClient,
};
