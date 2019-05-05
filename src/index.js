import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <App />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
