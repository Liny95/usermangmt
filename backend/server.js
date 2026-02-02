const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  users.push({ name });
  res.status(201).json({ message: "User added" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
