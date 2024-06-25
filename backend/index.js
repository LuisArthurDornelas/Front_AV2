const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const authRoutes = require('./routes/authRoutes');
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clients', clientRoutes); // Rota para clientes
app.use('/api/auth', authRoutes); // Rota para autenticação
app.use('/api/service-requests', serviceRequestRoutes); // Rota para solicitações de serviço

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
