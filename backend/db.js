const mysql = require('mysql');

const pool = mysql.createPool({
  host: '172.29.112.1',
  user: 'admin',
  password: '1234',
  database: 'empresa_ti',
  port: 3306
});

module.exports = pool;
