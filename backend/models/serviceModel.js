const pool = require('../db');

const getAllServices = (req, res) => {
  console.log('getAllServices called');
  pool.query('SELECT * FROM servicoti', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    console.log('Query results:', results);
    return res.status(200).json(results);
  });
};

module.exports = {
  getAllServices,
};
