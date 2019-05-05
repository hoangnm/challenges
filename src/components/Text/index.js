import styled from 'styled-components';

import { Box } from '../Box';

const Text = styled(Box)`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};
`;

export { Text };
