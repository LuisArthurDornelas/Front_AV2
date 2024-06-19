const pool = require('../db');

const createClient = (client, callback) => {
  const { email, password, name, cpf, birthdate, phone, maritalStatus, education } = client;
  pool.query(
    'INSERT INTO cliente (email, password, name, cpf, birthdate, phone, maritalStatus, education) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [email, password, name, cpf, birthdate, phone, maritalStatus, education],
    callback
  );
};

module.exports = {
  createClient,
};
