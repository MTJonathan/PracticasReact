const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empleadoscrud",
});

app.post("/create", (req, res) => {
  const { nombre, edad, pais, cargo, anos } = req.body;

  db.query(
    "INSERT INTO empleados (nombre, edad, pais, cargo, anos) VALUES (?, ?, ?, ?, ?)",
    [nombre, edad, pais, cargo, anos],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Empleado registrado!!");
      }
    }
  );
});

app.listen(3000, () =>
  console.log("Server running on port http://localhost:3000")
);
