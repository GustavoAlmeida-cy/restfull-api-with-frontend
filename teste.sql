-- Deleta o banco de dados se existir
DROP DATABASE IF EXISTS `empresa`;

-- Cria o banco de dados com a codificação utf8mb4
CREATE DATABASE `empresa` DEFAULT CHARACTER
SET
  utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- Utiliza o banco de dados
USE `empresa`;

-- Deleta a tabela `funcionarios` se ela já existir
DROP TABLE IF EXISTS `funcionarios`;

-- Cria a tabela `funcionarios`
CREATE TABLE
  `funcionarios` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cargo` VARCHAR(50) NOT NULL,
    `salario` DECIMAL(10, 2) NOT NULL, -- Usando DECIMAL para valores monetários
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Insere dados de exemplo na tabela
INSERT INTO
  `funcionarios` (`nome`, `cargo`, `salario`)
VALUES
  ('Teste da Silva', 'ADM', 7777.00),
  ('Zé das Couve', 'CLT', 1518.00),
  ('Demiurgo da Silva', 'Estagiário', 6969.00);