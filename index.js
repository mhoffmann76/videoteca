const database = require("./db/db");
const express = require("express");
const app = express();

try {
  database.sync().then(() => {});

  app.listen(9443, () => {
    console.log("Servidor rodando na porta 9443");
  });
} catch (erro) {
  console.log(`Houve uma falha ao sincronizar com o banco de dados. ${erro}`);
}
