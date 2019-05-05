import styled from 'styled-components';
import { fontSize, fontWeight, textAlign } from 'styled-system';

import { Box } from '../Box';

const Text = styled(Box)`
  ${fontSize};
  ${fontWeight};
  ${textAlign};
`;

Text.defaultProps = {
  color: 'grey',
};

export { Text };
