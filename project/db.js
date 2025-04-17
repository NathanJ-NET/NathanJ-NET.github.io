// db.js
const mysql = require('mysql2');

// Create a connection pool (better for performance)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',           // or whatever user you set
  password: 'yourPassword', // replace with your actual root password
  database: 'gradebook',  // your MySQL DB name
});

// Export a promise-based pool
const promisePool = pool.promise();
module.exports = promisePool;