-- Descrição: Script SQL para criar um banco de dados mock com uma tabela de funcionários
-- e alguns dados de exemplo. O banco de dados é chamado 'empresa' e a tabela
-- 'funcionarios'. A tabela contém os campos 'id', 'nome', 'cargo' e 'salario'.
-- O campo 'id' é a chave primária e é auto-incrementado. Os dados de exemplo
-- incluem três funcionários com diferentes cargos e salários.
-- Autor: Seu Nome
-- Data: 2023-10-01
-- Este script deve ser executado em um ambiente MySQL
-- Certifique-se de que você tem permissões suficientes para criar bancos de dados e tabelas.
-- Início do script
-- Conexão com o banco de dados
-- Certifique-se de que você está conectado ao servidor MySQL
-- com um usuário que tenha permissões para criar bancos de dados e tabelas.

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
  ('Teste da Silva', 'ADM', 7777.01),
  ('Maria da Silva', 'Gerente', 2500.00),
  ('João da Silva', 'Desenvolvedor', 2000.00),
  ('Ana Souza', 'Analista de Sistemas', 3000.00),
  ('Carlos Oliveira', 'Suporte Técnico', 1500.00),
  ('Fernanda Costa', 'RH', 1800.00),
  ('Roberto Santos', 'Financeiro', 2200.00),
  ('Luciana Lima', 'Marketing', 1700.00),
  ('Paulo Mendes', 'Vendas', 1900.00),
  ('Mariana Rocha', 'Designer Gráfico', 1600.00),
  ('Ricardo Alves', 'Engenheiro de Software', 2800.00),
  ('Juliana Martins', 'Analista de Dados', 2100.00),
  ('Zé Almeida', 'CLT', 1518.00),
  ('João Pereira', 'Estagiário', 500.00);