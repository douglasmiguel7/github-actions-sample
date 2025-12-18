import express from "express";

const app = express();

const message = process.env.MESSAGE || "Hello, World!";

app.get("/", (req, res) => {
  const timestamp = new Date().toString();

  res.send({ message, timestamp });
});

export default app
