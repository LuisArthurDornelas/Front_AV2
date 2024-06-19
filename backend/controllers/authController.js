const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const login = (req, res) => {
  const { login, password } = req.body;
  pool.query('SELECT * FROM clients WHERE email = ?', [login], (error, results) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

    if (results.length === 0) {
      return res.status(401).json({ status: 'fail', message: 'Invalid login or password' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

      if (isMatch) {
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
        return res.status(200).json({ status: 'success', token });
      } else {
        return res.status(401).json({ status: 'fail', message: 'Invalid login or password' });
      }
    });
  });
};

module.exports = {
  login,
};
