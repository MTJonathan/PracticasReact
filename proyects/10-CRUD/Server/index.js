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

app.get("/empleados", (req, res) => {
  db.query("SELECT * FROM empleados", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const { id, nombre, edad, pais, cargo, anos } = req.body;
  db.query(
    "UPDATE empleados SET nombre = ?, edad = ?, pais = ?, cargo = ?, anos = ? WHERE id = ?",
    [nombre, edad, pais, cargo, anos, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM empleados WHERE id = ?", [id], 
    (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3000, () =>
  console.log("Server running on port http://localhost:3000")
);
