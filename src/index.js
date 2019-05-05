import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(function(state, action) {
  const _state =
    state == null
      ? {
          donate: 0,
          message: '',
        }
      : state;

  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, _state, {
        message: action.message,
      });

    default:
      return _state;
  }
});

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
  <Provider store={store}>
    <React.Fragment>
      <App />
      <GlobalStyle />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
