import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost", // Host do banco de dados
  user: "root", // Usuário do banco de dados
  password: "root", // Senha do banco de dados
  database: "empresa", // Nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err.message);
  } else {
    console.log("Conectado ao MySQL!");
  }
});
