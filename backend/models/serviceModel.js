const pool = require('../db');

const getAllServices = (callback) => {
  pool.query('SELECT * FROM servicoti', callback);
};

module.exports = {
  getAllServices,
};
