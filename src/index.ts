// Simple Express server - learning Node.js basics!
import express from "express";

// Create an Express application
const app = express();

// Get port from environment variable, or use 3000 as default
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Define a simple route that responds with JSON
app.get("/", (req, res) => {
  res.json({
    message: "Hello from tetris!",
    tip: "Open index.html in your browser to play the game! Or visit https://christopherwampler.github.io/tetris"
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log(`🎮 To play: open hitchhikers-tetris.html in your browser`);
});

