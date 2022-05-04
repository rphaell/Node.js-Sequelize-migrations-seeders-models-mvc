// 1 - importar  o sequelize
const sequelize = require("sequelize");

// 2 - elencar os dados para conexão com o BD(username,password,host,port,dialect,database)
const config = {
  username: "root",
  password: "",
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  database: "escola",
};

// 3 - criar conexão com o banco de dados
const conexao = new sequelize(config);

// 4 - levantando alunos do BD
const promiseAlunos = conexao.query(
  "select * from alunos",
  sequelize.QueryTypes.SELECT
);

// 5 - levantar turmas do BD
const promiseTurmas = conexao.query(
  "select * from turmas",
  sequelize.QueryTypes.SELECT
);

const promiseTotal = Promise.all([promiseAlunos, promiseTurmas]);

promiseTotal.then((dados) => {
  console.log(dados[0], dados[1]);
  conexao.close();
});
