const express = require('express');
const router = express.Router();
const serviceRequestController = require('../controllers/serviceRequestController');

// Adicione as rotas necessárias para a solicitação de serviços
router.get('/', serviceRequestController.getAllRequests);
router.post('/', serviceRequestController.createRequest);
router.get('/:id', serviceRequestController.getRequestById);
router.put('/:id', serviceRequestController.updateRequest);
router.delete('/:id', serviceRequestController.deleteRequest);

module.exports = router;
