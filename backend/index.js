const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar o middleware cors
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const paymentMethodRoutes = require('./routes/paymentMethodRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Usar o middleware cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api', clientRoutes);
app.use('/api', serviceRoutes);
app.use('/api', paymentMethodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
