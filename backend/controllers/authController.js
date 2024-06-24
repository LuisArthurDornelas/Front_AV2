const pool = require('../db');

const login = (req, res) => {
  const { login, senha } = req.body;
  pool.query('SELECT * FROM cliente WHERE email = ?', [login], (error, results) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

    if (results.length === 0) {
      return res.status(401).json({ status: 'fail', message: 'Invalid login or password' });
    }

    const user = results[0];

    if (senha === user.senha) {
      return res.status(200).json({ status: 'success', message: 'Login successful' });
    } else {
      return res.status(401).json({ status: 'fail', message: 'Invalid login or password' });
    }
  });
};

module.exports = {
  login,
};
