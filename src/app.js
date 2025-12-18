const express = require("express");
const app = express();

const message = process.env.MESSAGE || "Hello, World!";

app.get("/", (req, res) => {
  const timestamp = new Date().toString();

  res.send({ message, timestamp });
});

module.exports = app;
