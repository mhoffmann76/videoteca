const database = require("./db/db");
const express = require("express");
const app = express();
const Video = require("./models/videos");
const VideoRoutes = require("./routes/routesvideos")
const VideosControllers = require("./controllers/controllerVideo");
const hand = require("express-handlebars");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

app.use("/", VideoHandler);




try {
  database.sync().then(() => {});

  app.listen(9443, () => {
    console.log("Servidor rodando na porta 9443");
  });
} catch (erro) {
  console.log(`Houve uma falha ao sincronizar com o banco de dados. ${erro}`);
}
