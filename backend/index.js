const express = require("express");
const app = express();

app.get("/contato", (request, response) => {
  return response.json({
    evento: "Semana omnistack 11.0",
    aluno: "Lucas de Assis Carvalho"
  });
});

app.listen(3333);
