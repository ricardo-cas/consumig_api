const express = require("express");
const app = express();

// ouvindo a API
app.listen("1010");

// Criando a rota padrão
app.get("/", (req, res) => {
  return res.json({ message: "First API!", id: 12093 });
});
