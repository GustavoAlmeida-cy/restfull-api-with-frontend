import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Versão do OpenAPI
    info: {
      title: "API de Funcionários",
      version: "1.0.0",
      description: "Documentação da API para gerenciamento de funcionários",
    },
  },
  // Caminho dos arquivos que contêm os comentários Swagger
  apis: ["./routes/users.js", "./controllers/user.js"], // Aqui você pode adicionar mais arquivos que têm os comentários Swagger
};

// Gerar a documentação Swagger a partir dos arquivos
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Rota para acessar a documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use("/api/users", userRoutes);

// Inicialização do servidor
app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
  console.log(
    "Acesse a documentação Swagger em: http://localhost:8800/api-docs"
  );
});
