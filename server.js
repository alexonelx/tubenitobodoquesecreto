const express = require("express");
const path = require("path");

const app = express();

// NO cache en dev (Railway + navegador)
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

// Sirve archivos estáticos desde /public
app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

app.get("/health", (_, res) => res.send("ok"));

// Si piden algo que no existe, 404 (NO regresar index)
app.use((req, res) => {
  res.status(404).send("Not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ TuBenitoBodoqueSecreto running on port ${PORT}`);
});
