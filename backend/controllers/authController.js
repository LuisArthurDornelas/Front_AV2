const pool = require('../db');

const login = (req, res) => {
    const { login, senha } = req.body;
    pool.query('SELECT id, email FROM cliente WHERE email = ? AND senha = ?', [login, senha], (error, results) => {
        if (error) {
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
        if (results.length > 0) {
            const user = results[0];
            return res.status(200).json({
                status: 'success',
                message: 'Login successful',
                id: user.id
            });
        } else {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
        }
    });
};

module.exports = {
    login
};
