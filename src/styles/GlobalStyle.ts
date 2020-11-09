/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.textSecundary};
    background-color: ${({ theme }) => theme.colors.backgroundSecundary};
    font-size: 1.6rem;
  }

  #root, body {
    height: 100vh;
  }

  :root {
    font-size: 65%;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;
