import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import welcome from '../../assets/welcome.svg';

import {
  Container, Box, BoxSection, Logo, Description, Title, Ilustration, Separator, StyledLink as Link,
} from './styles';

const Index: React.FC = () => (
  <Container>
    <Box>
      <BoxSection>
        <Ilustration src={welcome} alt="" />
      </BoxSection>

      <Separator />

      <BoxSection>
        <Logo src={logo} alt="" />
        <Title>Um sloga aqui</Title>
        <Description>Junte-se a nós e venha conhecer as melhores pessoas da internet.</Description>
        <div>
          <Link to="/login">
            <FiLogIn size="1.8rem" />
            Entrar
          </Link>
          <Link to="/register">Cadastrar</Link>
        </div>
      </BoxSection>
    </Box>
  </Container>
);

export default Index;
