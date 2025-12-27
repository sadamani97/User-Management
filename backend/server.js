const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
app.use(cors());
app.use(express.json());


// READ
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (e, rows) => {
    if (e) return res.status(500).send(e);
    res.send(rows);
  });
});


// CREATE
app.post("/users", (req, res) => {
  const { name, email, phone, address, age } = req.body;

  db.query(
    "INSERT INTO users (name, email, phone, address,age) VALUES (?, ?, ?, ?, ?)",
    [name, email, phone, address, age],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ id: result.insertId, name, email, phone, address, age });
    }
  );
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const { name, email, phone, address,age } = req.body;

  db.query(
    "UPDATE users SET name=?, email=?, phone=?, address=?, age=? WHERE id=?",
    [name, email, phone, address, age, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ id: req.params.id, name, email, phone, address, age });
    }
  );
});


// DELETE
app.delete("/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id=?", [req.params.id], (e) => {
    if (e) return res.status(500).send(e);
    res.send({ message: "User deleted" });
  });
});

app.listen(5000, () => console.log("Server running"));
