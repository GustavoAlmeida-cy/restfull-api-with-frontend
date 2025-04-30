import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #0077cc;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.nome.value = onEdit.nome;
      user.cargo.value = onEdit.cargo;
      user.salario.value = onEdit.salario;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    // Diagnóstico: Verificar se os campos estão preenchidos
    console.log("Dados do formulário: ", {
      nome: user.nome.value,
      cargo: user.cargo.value,
      salario: user.salario.value,
    });

    if (!user.nome.value || !user.cargo.value || !user.salario.value) {
      return toast.warn("Preencha todos os campos!");
    }

    const data = {
      nome: user.nome.value,
      cargo: user.cargo.value,
      salario: parseFloat(user.salario.value),
    };

    if (onEdit) {
      // Atualiza o funcionário existente
      await axios
        .put(`http://localhost:8800/api/users/${onEdit.id}`, data)
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      // Adiciona um novo funcionário
      await axios
        .post("http://localhost:8800/api/users", data)
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    // Limpar os campos após o envio
    user.nome.value = "";
    user.cargo.value = "";
    user.salario.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Cargo</Label>
        <Input name="cargo" />
      </InputArea>
      <InputArea>
        <Label>Salário</Label>
        <Input name="salario" type="number" step="0.01" />
      </InputArea>

      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default Form;
