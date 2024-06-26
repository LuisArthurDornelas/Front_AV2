const express = require('express');
const router = express.Router();
const serviceRequestController = require('../controllers/serviceRequestController');

// Adicione as rotas necessárias para a solicitação de serviços
router.get('/services', serviceRequestController.getAllServices); // Certifique-se de que esta rota está configurada corretamente
router.get('/', serviceRequestController.getAllRequests);
router.post('/', serviceRequestController.createRequest);
router.get('/:id', serviceRequestController.getRequestById);
router.put('/:id', serviceRequestController.updateRequest);
router.delete('/:id', serviceRequestController.deleteRequest);

// Adicione um endpoint de teste simples
router.get('/test', (req, res) => {
  res.json({ message: 'Teste de API funcionando!' });
});

module.exports = router;
