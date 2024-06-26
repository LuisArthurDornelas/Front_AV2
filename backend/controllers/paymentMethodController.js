const pool = require('../db');

// Controlador para obter todos os meios de pagamento
const getAllPaymentMethods = (req, res) => {
    pool.query('SELECT * FROM meiopagamento', (error, results) => {
        if (error) {
            console.error('Error fetching payment methods:', error);
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
        return res.status(200).json(results);
    });
};

// Controlador para criar um novo meio de pagamento
const createPaymentMethod = (req, res) => {
    const { nome, sigla, valorMaximo, meioEletronico } = req.body;
    console.log('Received data for new payment method:', { nome, sigla, valorMaximo, meioEletronico });
    
    if (!nome || !sigla || valorMaximo === undefined || meioEletronico === undefined) {
        return res.status(400).json({ status: 'error', message: 'Nome, Sigla, Valor Máximo e Meio Eletrônico são obrigatórios' });
    }
    
    pool.query(
        'INSERT INTO meiopagamento (nome, sigla, valorMaximo, meioEletronico) VALUES (?, ?, ?, ?)',
        [nome, sigla, valorMaximo, meioEletronico],
        (error, results) => {
            if (error) {
                console.error('Error inserting payment method:', error);
                return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
            }
            return res.status(201).json({ status: 'success', message: 'Payment method created successfully' });
        }
    );
};

module.exports = {
    getAllPaymentMethods,
    createPaymentMethod,
};
