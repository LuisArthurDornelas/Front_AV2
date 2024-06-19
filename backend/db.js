const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'LoLo123-',
  database: 'seu_banco_de_dados',
  port: 3306
});

module.exports = pool;
