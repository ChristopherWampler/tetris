import express from "express";

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from tetris!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

