
# Restful API with Frontend

Este projeto é uma aplicação full stack, composta por uma API em Node.js com MySQL e um frontend em React. Ele permite realizar operações CRUD (Create, Read, Update, Delete) para gerenciar informações de funcionários, como nome, cargo e salário.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- **Backend (API)**: Responsável pela lógica do servidor, autenticação, e interação com o banco de dados.
- **Frontend**: A interface de usuário para interagir com a API.

A estrutura do projeto é a seguinte:

```
📁 restfull-api-with-frontend
├── .gitignore
├── 📁 api
│   ├── 📁 controllers
│   │   └── user.js
│   ├── db.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── 📁 routes
│   │   └── users.js
│   └── yarn.lock
├── db-mock.sql
├── 📁 frontend
│   ├── package-lock.json
│   ├── package.json
│   ├── 📁 public
│   │   ├── 📁 image
│   │   │   └── universo.jpg
│   │   └── index.html
│   ├── 📁 src
│   │   ├── App.js
│   │   ├── 📁 components
│   │   │   ├── Form.js
│   │   │   └── Grid.js
│   │   ├── index.js
│   │   └── 📁 styles
│   │       └── global.js
│   └── yarn.lock
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express
  - MySQL
  - Swagger (para documentação da API) | Link gerado: [http://localhost:8800/api-docs](http://localhost:8800/api-docs)
  - Nodemon (para recarregamento automático no desenvolvimento)

- **Frontend:**
  - React
  - Axios (para requisições HTTP)
  - React Router (para navegação)
  - Styled-components (para estilização)
  
## Banco de Dados Mock

Este projeto inclui um script SQL (db-mock.sql) localizado na raiz do projeto para criação de um banco de dados MySQL fictício com dados de exemplo. Ele cria:

- Um banco de dados chamado `empresa`
- Uma tabela chamada `funcionarios`
- Três registros de exemplo com diferentes cargos e salários  

## Pré-requisitos

Para rodar o projeto localmente, você precisa ter o Node.js e o MySQL instalados na sua máquina.

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

Além disso, para rodar o frontend, é necessário o React Scripts, que é instalado automaticamente ao rodar o comando `npm install` ou `yarn install`.

## Instalação

### Passo 1: Instalar as dependências

Na raiz do projeto, execute o seguinte comando para instalar as dependências do backend e frontend simultaneamente:

```bash
npm run install:all
```

Isso instalará os pacotes do Node.js tanto para o backend quanto para o frontend.

### Passo 2: Configurar o banco de dados

Certifique-se de que o MySQL esteja configurado e rodando. Crie um banco de dados com o nome desejado e configure a conexão no arquivo `api/db.js`. Exemplo de configuração:

```js
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senha_do_banco",
  database: "nome_do_banco"
});
```

### Passo 3: Iniciar o projeto

Para rodar o backend e o frontend simultaneamente, utilize o comando:

```bash
npm start
```

Este comando executará o script `concurrently`, que iniciará o servidor da API e o servidor do frontend ao mesmo tempo. O backend será executado na porta `8800` e o frontend na porta `3000`.

## Endpoints da API

A API oferece os seguintes endpoints para gerenciar os dados dos funcionários:

### 1. **GET /api/users**
   - **Descrição**: Retorna a lista de todos os funcionários.
   - **Resposta**: Array com os dados dos funcionários.

### 2. **GET /api/users/:id**
   - **Descrição**: Retorna os dados de um funcionário específico pelo `id`.
   - **Parâmetros**: `id` (ID do funcionário).
   - **Resposta**: Dados do funcionário ou erro caso não encontrado.

### 3. **POST /api/users**
   - **Descrição**: Adiciona um novo funcionário.
   - **Body**:
     ```json
     {
       "nome": "Nome do Funcionário",
       "cargo": "Cargo",
       "salario": 5000
     }
     ```
   - **Resposta**: Mensagem de sucesso ou erro.

### 4. **PUT /api/users/:id**
   - **Descrição**: Atualiza os dados de um funcionário existente.
   - **Parâmetros**: `id` (ID do funcionário).
   - **Body**:
     ```json
     {
       "nome": "Novo Nome",
       "cargo": "Novo Cargo",
       "salario": 6000
     }
     ```
   - **Resposta**: Mensagem de sucesso ou erro.

### 5. **DELETE /api/users/:id**
   - **Descrição**: Deleta um funcionário pelo `id`.
   - **Parâmetros**: `id` (ID do funcionário).
   - **Resposta**: Mensagem de sucesso ou erro.

## Como Contribuir

1. Faça o fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
