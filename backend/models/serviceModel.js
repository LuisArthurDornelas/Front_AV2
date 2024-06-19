const pool = require('../db');

const getAllServices = (callback) => {
  pool.query('SELECT * FROM services', callback);
};

module.exports = {
  getAllServices,
};
