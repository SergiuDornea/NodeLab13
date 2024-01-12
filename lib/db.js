//. Importarea modulului MySQL:
var mysql = require("mysql");

//Configurarea conexiunii la bază de date:
//Se configurează obiectul connection pentru a se conecta la o bază de date MySQL.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_task",
});

// Conectarea la bază de date:
//  Metoda connect este apelată pentru a încerca conectarea la bază de date.
//  În caz de eroare, se afișează eroarea în consolă.
//  În caz de succes, se afișează un mesaj de confirmare în consolă.

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully..!!");
  }
});

// facem export pt a fi utilizata conexiunea in alte module
module.exports = connection;
