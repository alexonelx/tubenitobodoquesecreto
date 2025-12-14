const express = require("express");
const path = require("path");

const app = express();

// Sirve archivos estáticos (index.html) desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Health check (útil para debug)
app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ TuBenitoBodoqueSecreto listening on port ${PORT}`);
});
