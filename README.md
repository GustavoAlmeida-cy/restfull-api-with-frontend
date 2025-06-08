
# 🚀 Restful API com Frontend

Uma aplicação **Full Stack** para gerenciar funcionários com operações CRUD — nome, cargo e salário — via uma API RESTful e um frontend intuitivo.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/Styled--Components-db7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

## 🧱 Estrutura

```
📦 Restfull-api-with-frontend
├── 📁 api          # Backend (Node.js + MySQL)
├── 📁 frontend     # Frontend (React)
├── 📁 data         # Script com dados de exemplo
```

---

## 🔧 Tecnologias

### 🔙 Backend
- Node.js + Express
- MySQL
- Swagger
- Nodemon

### 🔜 Frontend
- React
- Axios
- React Router
- styled-components

---

## 🗃 Banco de Dados

Inclui script `db-mock.sql` para criar:

- DB `empresa`
- Tabela `funcionarios`
- 3 registros de exemplo
  
---

## ⚙️ Como Rodar

### 1️⃣ Instalar dependências:
```bash
npm run install:all
```

### 2️⃣ Configurar banco (`api/db.js`):
```js
database: "nome_do_banco"
```

### 3️⃣ Iniciar projeto:
```bash
npm start
```

- 🟢 Backend: `http://localhost:8800`
- 🔵 Frontend: `http://localhost:3000`

---

## 🔁 Endpoints da API

| Método | Rota              | Ação                    |
|--------|-------------------|-------------------------|
| GET    | `/api-docs`       | Documentação Swagger    |
| GET    | `/api/users`      | Listar funcionários     |
| GET    | `/api/users/:id`  | Buscar por ID           |
| POST   | `/api/users`      | Criar funcionário       |
| PUT    | `/api/users/:id`  | Atualizar funcionário   |
| DELETE | `/api/users/:id`  | Remover funcionário     |

---

## 🤝 Contribuindo

1. `git checkout -b feature/sua-feature`
2. Commit suas mudanças
3. `git push origin`
4. Abra um Pull Request 🚀

---

## 📄 Licença

Distribuído sob a [MIT License](LICENSE).
