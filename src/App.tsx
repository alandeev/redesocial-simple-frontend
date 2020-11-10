import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';
import { GlobalStyle } from './styles/GlobalStyle';
import defaultTheme from './styles/themes/default';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
