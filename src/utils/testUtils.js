import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export * from 'react-testing-library';

export function renderWithTheme(children) {
  // eslint-disable-next-line
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
