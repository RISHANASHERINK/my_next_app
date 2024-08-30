const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',   // Adjust this if your MySQL server is hosted elsewhere
  user: 'root',        // Replace with your MySQL username
  password: 'pass@123#RSK', // Replace with your MySQL password
  database: 'my_db' // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = db;
