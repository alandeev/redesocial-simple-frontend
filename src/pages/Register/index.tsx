/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory, Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container, Box, Title, ButtonGroup,
} from './styles';

interface IRegisterData {
  user: string;
  email: string;
  pass: string;
  r_pass: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  function handleSubmit(data: IRegisterData) {
    console.log(data);
  }

  return (
    <Container>
      <Box>
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input
            name="user"
            label="Usuário"
            type="text"
            usage="Seu nome de usuário"
            Icon={FiUser}
            size="1.8rem"
          />
          <Input
            name="email"
            label="Email"
            type="email"
            usage="Seu email"
            Icon={FiMail}
            size="1.8rem"
          />
          <Input
            name="pass"
            label="Senha"
            type="password"
            usage="Uma senha forte"
            Icon={FiLock}
            size="1.8rem"
          />
          <Input
            name="r_pass"
            label="Repita a senha"
            type="password"
            usage="Repita a senha"
            Icon={FiLock}
            size="1.8rem"
          />
        </Form>

        <ButtonGroup>
          <Button onClick={() => history.goBack()}>Voltar</Button>
          <Button onClick={() => formRef.current?.submitForm()}>Criar</Button>
        </ButtonGroup>

        <Link to="/login">Já tem uma conta? Clique aqui!</Link>
      </Box>
    </Container>
  );
};

export default Register;
