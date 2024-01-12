//. Importarea modulului MySQL:
var mysql = require("mysql");

//Configurarea conexiunii la bază de date:
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_task",
});
