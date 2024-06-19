const mysql = require('mysql');

const pool = mysql.createPool({
  host: '172.29.112.1',
  user: 'admin',
  password: '1234',
  database: 'empresa_ti',
  port: 3306
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL!');
    connection.release();
  }
});
