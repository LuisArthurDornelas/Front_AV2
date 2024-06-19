const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoute');
const serviceRoutes = require('./routes/serviceRoute');
const paymentMethodRoutes = require('./routes/paymentMethodRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api', clientRoutes);
app.use('/api', serviceRoutes);
app.use('/api', paymentMethodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
