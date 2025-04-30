import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
  color: white;
  text-align: center;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 8px;
  text-shadow: 0px 0px 5px white, 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  box-shadow: 0px 0px 5px #ccc;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #0077cc;
  color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px #ccc;
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
        toast.error("Erro: Os dados da API não estão no formato esperado.");
      }
    } catch (error) {
      toast.error("Erro ao carregar os funcionários.");
    }
  };

  const handleSearch = async () => {
    if (!searchId) {
      toast.warn("Digite um ID para buscar.");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:8800/api/users/${searchId}`
      );
      setUsers(res.data ? [res.data] : []);
    } catch (error) {
      toast.error("Funcionário não encontrado.");
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
          />
          <Button onClick={handleSearch}>Buscar</Button>
          <Button onClick={handleClear} style={{ backgroundColor: "red" }}>
            Limpar
          </Button>
        </SearchContainer>

        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
