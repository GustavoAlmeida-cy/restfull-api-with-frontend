import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  max-width: 1120px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  word-break: break-word;
  border-collapse: separate;
  border-spacing: 0 8px; /* Espaço entre linhas para melhor visual */
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
  font-weight: 600;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none;"}
  }
`;

export const Td = styled.td`
  padding: 12px 8px;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  width: ${(props) => props.width || "auto"};
  background-color: #fafafa;
  border-radius: 4px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none;"}
  }
`;

const IconButton = styled.span`
  cursor: pointer;
  color: #0077cc;
  margin: 0 5px;
  font-size: 1.1rem;
  transition: color 0.2s;

  &:hover {
    color: #005fa3;
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => setOnEdit(item);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8800/api/users/${id}`
      );
      setUsers(users.filter((user) => user.id !== id));
      toast.success(data);
      setOnEdit(null);
    } catch (error) {
      toast.error(error.response?.data || "Erro ao deletar funcionário.");
    }
  };

  console.log("Usuários na tabela:", users);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Cargo</Th>
          <Th onlyWeb>Salário</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item) => (
          <Tr key={item.id}>
            <Td width="10%">{item.id}</Td>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.cargo}</Td>
            <Td width="20%" onlyWeb>
              {item.salario}
            </Td>
            <Td alignCenter width="5%">
              <IconButton
                onClick={() => handleEdit(item)}
                title={`Editar ${item.nome}`}
              >
                <FaEdit />
              </IconButton>
            </Td>
            <Td alignCenter width="5%">
              <IconButton
                onClick={() => handleDelete(item.id)}
                title={`Excluir ${item.nome}`}
                style={{ color: "#d9534f" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#c9302c")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#d9534f")}
              >
                <FaTrash />
              </IconButton>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
