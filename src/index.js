import React from 'react';
import { render } from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
);
