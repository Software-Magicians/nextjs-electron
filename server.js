const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get("/api/v1/:id", async (req, res) => {
  // Implementation of GET route
});

app.post("/api/v1/", async (req, res) => {
  // Implementation of POST route
});

// Serve static files from the Next.js export
app.use(express.static(path.join(__dirname, "./out")));
// Catch-all to serve index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./out", "index.html"));
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
