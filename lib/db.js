const mysql = require("mysql");

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust this limit based on your application's needs
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_task",
});

// Acquire a connection from the pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1); // Exit the application on a database connection error
  }
  console.log("Database Connected Successfully..!!");

  // Release the connection back to the pool after acquiring it
  connection.release();
});

module.exports = pool;
