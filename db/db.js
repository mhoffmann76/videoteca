const Sequelize = require("sequelize");



const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./videoteca.sqlite",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco realizada com sucesso!");
  })
  .catch((err) => {
    console.log(`Erro ao conectar com o banco: ${err}`);
  });

module.exports = sequelize;
