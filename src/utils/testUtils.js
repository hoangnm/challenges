import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export { fireEvent, wait, cleanup } from 'react-testing-library';

export function renderWithTheme(children) {
  // eslint-disable-next-line
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export function updateInput(input, value) {
  fireEvent.change(input, {
    target: { value },
  });
}
