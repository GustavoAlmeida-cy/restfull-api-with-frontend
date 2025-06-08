import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;

const Title = styled.h2`
  font-weight: 600;
  color: #000;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 8px;
  text-shadow: 0 0 5px #fff, 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 180px;
  box-shadow: 0 0 5px #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 8px #0077cc;
  }
`;

const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  background-color: ${({ danger }) => (danger ? "#d9534f" : "#0077cc")};
  color: white;
  cursor: pointer;
  box-shadow: 0 0 5px #ccc;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ danger }) => (danger ? "#c9302c" : "#005fa3")};
  }
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [searchId, setSearchId] = useState("");

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/users");
      if (Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        toast.error("❌ Dados da API em formato inesperado.");
      }
    } catch {
      toast.error("❌ Falha ao carregar funcionários.");
    }
  };

  const handleSearch = async () => {
    if (!searchId.trim()) {
      toast.warn("⚠️ Por favor, insira um ID para buscar.");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:8800/api/users/${searchId}`
      );
      setUsers(res.data ? [res.data] : []);
    } catch {
      toast.error("❌ Funcionário não encontrado.");
    }
  };

  const handleClear = () => {
    setSearchId("");
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Title>FUNCIONÁRIOS</Title>

        <SearchContainer>
          <Input
            type="number"
            placeholder="Buscar por ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            aria-label="Buscar funcionário por ID"
          />
          <Button onClick={handleSearch}>Buscar 🔍</Button>
          <Button danger onClick={handleClear}>
            Limpar ✖️
          </Button>
        </SearchContainer>

        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>

      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
