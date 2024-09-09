const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Static dosyalar için output klasörünü kullan
app.use(express.static(path.join(__dirname, "output")));

// Ana sayfa için route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "output", "index.html"));
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
