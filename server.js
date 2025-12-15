const express = require("express");
const path = require("path");

const app = express();

// Static files
app.use(express.static(path.join(__dirname), {
  extensions: ["html"],
}));

// Health check
app.get("/health", (_, res) => res.send("ok"));

// Fallback para SPA / recargas
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ TuBenitoBodoqueSecreto running on port ${PORT}`);
});
