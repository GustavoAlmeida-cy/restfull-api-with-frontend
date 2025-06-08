import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 360px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  font-size: 1rem;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #0077cc;
  color: white;
  height: 42px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005fa3;
  }
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const formRef = useRef();

  useEffect(() => {
    if (onEdit && formRef.current) {
      const form = formRef.current;
      form.nome.value = onEdit.nome || "";
      form.cargo.value = onEdit.cargo || "";
      form.salario.value = onEdit.salario || "";
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const nome = form.nome.value.trim();
    const cargo = form.cargo.value.trim();
    const salarioRaw = form.salario.value.trim();

    if (!nome || !cargo || !salarioRaw) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    const salario = parseFloat(salarioRaw);
    if (isNaN(salario) || salario < 0) {
      toast.warn("Salário deve ser um número válido e positivo!");
      return;
    }

    const data = { nome, cargo, salario };

    try {
      if (onEdit) {
        const response = await axios.put(
          `http://localhost:8800/api/users/${onEdit.id}`,
          data
        );
        toast.success(response.data);
      } else {
        const response = await axios.post(
          "http://localhost:8800/api/users",
          data
        );
        toast.success(response.data);
      }
      setOnEdit(null);
      form.reset();
      getUsers();
    } catch (error) {
      const message = error.response?.data || "Erro ao salvar funcionário.";
      toast.error(message);
    }
  };

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" />
      </InputArea>

      <InputArea>
        <Label htmlFor="cargo">Cargo</Label>
        <Input id="cargo" name="cargo" />
      </InputArea>

      <InputArea>
        <Label htmlFor="salario">Salário</Label>
        <Input id="salario" name="salario" type="number" step="0.01" min="0" />
      </InputArea>

      <Button type="submit">{onEdit ? "Atualizar" : "Salvar"}</Button>
    </FormContainer>
  );
};

export default Form;
