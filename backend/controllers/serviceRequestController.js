const pool = require('../db');

// Controlador para obter todos os serviços de TI
const getAllServices = (req, res) => {
  console.log('getAllServices chamado');
  pool.query('SELECT * FROM servicoti', (error, results) => {
    if (error) {
      console.error('Erro ao executar a query:', error);
      return res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
    }
    console.log('Resultados da query:', results);
    return res.status(200).json(results);
  });
};

// Controlador para obter todas as solicitações de serviço
const getAllRequests = (req, res) => {
  pool.query('SELECT * FROM solicitacao', (error, results) => {
    if (error) {
      return res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
    }
    return res.status(200).json(results);
  });
};

// Controlador para criar uma nova solicitação de serviço
const createRequest = (req, res) => {
  const { clienteId, servicoId, dataPedido, status, dataPrevista, meioPagamentoSigla } = req.body;
  pool.query(
    'INSERT INTO solicitacao (clienteId, servicoId, dataPedido, status, dataPrevista, meioPagamentoSigla) VALUES (?, ?, ?, ?, ?, ?)',
    [clienteId, servicoId, dataPedido, status, dataPrevista, meioPagamentoSigla],
    (error, results) => {
      if (error) {
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
      return res.status(201).json({ status: 'success', message: 'Request created successfully' });
    }
  );
};

// Controlador para obter uma solicitação de serviço pelo ID
const getRequestById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM solicitacao WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    return res.status(200).json(results[0]);
  });
};

// Controlador para atualizar uma solicitação de serviço
const updateRequest = (req, res) => {
  const { id } = req.params;
  const { clienteId, servicoId, dataPedido, status, dataPrevista, meioPagamentoSigla } = req.body;
  pool.query(
    'UPDATE solicitacao SET clienteId = ?, servicoId = ?, dataPedido = ?, status = ?, dataPrevista = ?, meioPagamentoSigla = ? WHERE id = ?',
    [clienteId, servicoId, dataPedido, status, dataPrevista, meioPagamentoSigla, id],
    (error, results) => {
      if (error) {
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
      return res.status(200).json({ status: 'success', message: 'Request updated successfully' });
    }
  );
};

// Controlador para deletar uma solicitação de serviço
const deleteRequest = (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM solicitacao WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    return res.status(200).json({ status: 'success', message: 'Request deleted successfully' });
  });
};

module.exports = {
  getAllServices,
  getAllRequests,
  createRequest,
  getRequestById,
  updateRequest,
  deleteRequest,
};
