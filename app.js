const createError = require("http-errors");
const express = require("express");
const path = require("path");
const flash = require("express-flash");
const session = require("express-session");
const tasksRouter = require("./routes/tasks");
const connection = require("./lib/db");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: true,
    secret: "secret",
  })
);
app.use(flash());

// Explicitly handle errors during connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1); // Exit the application on database connection error
  }
  console.log("Connected to database as id", connection.threadId);

  app.use("/tasks", tasksRouter);

  app.use((req, res, next) => {
    next(createError(404));
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
