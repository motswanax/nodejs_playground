const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi from the server.");
});

app.get("/cars", (req, res) => {
  res.send("This is for cars.");
});

app.listen(8000, () => {
  console.log("Server connected successfully!");
});
