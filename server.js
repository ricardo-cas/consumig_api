const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

// CORS é um controle de acesso para quando um servidor está conversando com outro
app.use(cors());

// Criando a rota padrão
app.get("/", async (req, res) => {
  try {
    // const response = await axios('https://jsonplaceholder.typicode.com/users') // com o Axios ele já retorna o response com os dados do data ex: response.data

    // response é a resposta do Axios MAS eu tiro o response do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

// ouvindo a API
app.listen("1010");
