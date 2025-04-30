import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os funcionários
 *     responses:
 *       200:
 *         description: Lista de funcionários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   cargo:
 *                     type: string
 *                   salario:
 *                     type: number
 */
router.get("/", getUsers); // Listar todos os funcionários

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retorna um funcionário específico pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 cargo:
 *                   type: string
 *                 salario:
 *                   type: number
 *       404:
 *         description: Funcionário não encontrado
 */
router.get("/:id", getUserById); // Buscar funcionário por ID

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Adiciona um novo funcionário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cargo:
 *                 type: string
 *               salario:
 *                 type: number
 *     responses:
 *       200:
 *         description: Funcionário criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", addUser); // Criar novo funcionário

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um funcionário existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cargo:
 *                 type: string
 *               salario:
 *                 type: number
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Funcionário não encontrado
 */
router.put("/:id", updateUser); // Atualizar funcionário

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um funcionário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário deletado com sucesso
 *       404:
 *         description: Funcionário não encontrado
 */
router.delete("/:id", deleteUser); // Deletar funcionário

export default router;
