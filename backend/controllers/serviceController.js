const serviceModel = require('../models/serviceModel');

const getServices = (req, res) => {
  serviceModel.getAllServices((error, results) => {
    if (error) return res.status(500).json({ status: 'error', message: 'Internal Server Error' });

    console.log("aaaaa");
    return res.status(200).json(results);
    
  });
};

module.exports = {
  getServices,
};
