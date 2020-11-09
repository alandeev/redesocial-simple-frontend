import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;

  max-width: 70vw;
  min-height: 70vh;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-width: 250px;
  max-width: 45%;

  > div {
    display: flex;
    margin-top: 16px;
  }
`;

export const Separator = styled.div`
  margin: 0 30px;
  width: 1px;
  min-height: 100%;

  background-color: ${lighten(0.75, '#000')};
`;

export const Logo = styled.img`
  margin-bottom: 16px;

  height: 64px;
`;

export const Ilustration = styled.img`
  height: 250px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Poppins', sans-serif;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecundary};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-right: 7px;

  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;

  border-radius: 2px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  transition: 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => lighten(1, theme.colors.text)};
  }

  & > svg {
    margin-right: 2px;
  }
`;
