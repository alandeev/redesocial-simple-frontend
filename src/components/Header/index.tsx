import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import {
  Container,
  Logo,
  Nav,
  NavItem,
  User,
  UserName,
  UserPhoto,
} from './styles';

interface Props {
  area?: string;
  active: string;
}

const Header: React.FC<Props> = ({ area, active }) => (
  <Container area={area}>
    <Logo src={logo} alt="Logo" />

    <Nav>
      <NavItem className={`${active === 'home' ? 'active' : ''}`}><Link to="/feed">Feed</Link></NavItem>
      <NavItem className={`${active === 'me' ? 'active' : ''}`}><Link to="/me">Meu Perfil</Link></NavItem>
      <NavItem className={`${active === 'search' ? 'active' : ''}`}><Link to="/search">Buscar</Link></NavItem>
      <NavItem className={`${active === 'about' ? 'active' : ''}`}><Link to="/about">Sobre</Link></NavItem>
    </Nav>

    <User>
      <UserName>Miguel</UserName>
      <UserPhoto src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
    </User>
  </Container>
);

export default Header;
