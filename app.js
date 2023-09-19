const express = require("express");

const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  // Reading file.
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) res.send("There was an error in accessing the file.");
    res.send(data);
  });
});

app.get("/write", (req, res) => {
  fs.appendFile("./data.txt", "\nCherry", (err) => {
    if (err) res.send("Error in writing to file.");
    res.send("Data written successfully.");
  });
});

app.listen(8000, () => {
  console.log("Server connected successfully!");
});
