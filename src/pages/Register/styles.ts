import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: solid 1px ${({ theme }) => theme.colors.backgroundSecundary};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  padding: 20px;

  & > form {
    margin-bottom: 10px;
    min-width: 300px;
  }

  & > a {
    font-size: 1.4rem;
    text-decoration: none;
    color: ${({ theme }) => lighten(0.25, theme.colors.textSecundary)} !important;

    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.text} !important;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 10px;

  & > button:nth-child(1) {
    margin-right: 8px;
  }
`;
