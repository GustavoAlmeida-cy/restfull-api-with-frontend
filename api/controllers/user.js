import { db } from "../db.js";

// Buscar todos os funcionários
export const getUsers = (_, res) => {
  const q = "SELECT * FROM funcionarios";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// Buscar funcionário por ID
export const getUserById = (req, res) => {
  const q = "SELECT * FROM funcionarios WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Funcionário não encontrado.");
    return res.status(200).json(data[0]);
  });
};

// Adicionar novo funcionário
export const addUser = (req, res) => {
  const q = "INSERT INTO funcionarios (`nome`, `cargo`, `salario`) VALUES (?)";

  const values = [req.body.nome, req.body.cargo, req.body.salario];

  db.query(q, [values], (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Funcionário criado com sucesso.");
  });
};

// Atualizar funcionário existente
export const updateUser = (req, res) => {
  const q =
    "UPDATE funcionarios SET `nome` = ?, `cargo` = ?, `salario` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.cargo,
    req.body.salario,
    req.params.id,
  ];

  db.query(q, values, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Funcionário atualizado com sucesso.");
  });
};

// Deletar funcionário
export const deleteUser = (req, res) => {
  const q = "DELETE FROM funcionarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Funcionário deletado com sucesso.");
  });
};
