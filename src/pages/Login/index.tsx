/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory, Link } from 'react-router-dom';
import { FiMail, FiLock, FiCheckCircle } from 'react-icons/fi';
import * as yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

import {
  Container,
  Box,
  Title,
  ButtonGroup,
  SucessLogin,
} from './styles';

interface ILoginData {
  email: string;
  pass: string;
}

interface IResponseLogin {
  data: {
    expire_in: number;
    token: string;
    username: string;
  }
}

const LoginDataSchema = yup.object().shape({
  email: yup.string()
    .required('Você tem que digitar um email.')
    .email('Tem que ser um email valido.'),
  pass: yup.string()
    .required('Você tem que digitar uma senha.')
    .min(8, 'A senha deve ter no mínimo 8 caracteres.')
    .max(20, 'A senha pode conter no máximo 20 caracteres.'),
});

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(dataLogin: ILoginData, { reset }: { reset: Function }) {
    try {
      LoginDataSchema.validateSync(dataLogin, { abortEarly: false });

      api.get('/login', {
        headers: {
          email: dataLogin.email,
          password: dataLogin.pass,
        },
      })
        .then(({ data }: IResponseLogin) => {
          localStorage.setItem('@mc-farms/user_info', JSON.stringify({ token: data.token, username: data.username }));
          reset();
          setShowModal(true);

          setTimeout(() => {
            history.push('/');
          }, 3500);
        })
        .catch((err) => {
          if (!err.response) {
            console.error(err);
          } else {
            const { data } = err.response;
            if (data.message === 'Account not exist.') formRef.current!.setFieldError('email', 'Conta inexistente');
            if (data.message === 'Wrong password.') formRef.current!.setFieldError('pass', 'Senha errada.');
          }
        });
    } catch (err) {
      if (err.name === 'ValidationError') {
        err.inner.forEach((error: { path: string; errors: string[]; }) => {
          formRef.current!.setFieldError(error.path, error.errors[0]);
        });
      } else {
        console.error(err.name);
      }
    }
  }

  return (
    <>
      {showModal && (
        <SucessLogin>
          <FiCheckCircle size="6rem" />
          <h2>Login efetuado com sucesso!</h2>
          <span>Você será redirecionado em alguns instantes.</span>
        </SucessLogin>
      )}
      <Container>
        <Box>
          <Title>Acessar Conta</Title>

          <Form onSubmit={handleSubmit} ref={formRef}>
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
              usage="Sua senha"
              Icon={FiLock}
              size="1.8rem"
            />
          </Form>

          <ButtonGroup>
            <Button onClick={() => history.goBack()}>Voltar</Button>
            <Button onClick={() => formRef.current?.submitForm()}>Entrar</Button>
          </ButtonGroup>

          <Link to="/register">Não tem uma conta? Clique aqui!</Link>
        </Box>
      </Container>
    </>
  );
};

export default Login;
