import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root,
  #root > div {
    height: 100%;
  }

  html {
    box-sizing: border-box;
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
`;

render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
);
