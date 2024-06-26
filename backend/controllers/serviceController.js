const pool = require('../db');

const getAllServices = (req, res) => {
    pool.query('SELECT * FROM servicoti', (error, results) => {
        if (error) {
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
        return res.status(200).json(results);
    });
};

const createService = (req, res) => {
    const { nome, preco, prazo } = req.body;
    if (!nome || !preco || !prazo) {
        return res.status(400).json({ status: 'error', message: 'All fields are required' });
    }
    pool.query(
        'INSERT INTO servicoti (nome, preco, prazo) VALUES (?, ?, ?)',
        [nome, preco, prazo],
        (error, results) => {
            if (error) {
                return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
            }
            return res.status(201).json({ status: 'success', message: 'Service created successfully' });
        }
    );
};

module.exports = {
    getAllServices,
    createService,
};
