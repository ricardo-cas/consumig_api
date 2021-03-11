const express = require("express");
const app = express();

// Criando a rota padrão
app.get("/", (req, res) => {
  return res.json([
    { name: "Ricardo", id: 12093 },
    {
      name: "Indiara",
      id: 12094,
    },
    { name: "Sônia", id: 10934 },
  ]);
});

// ouvindo a API
app.listen("1010");
