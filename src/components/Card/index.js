import styled from 'styled-components';
import { borders, themeGet } from 'styled-system';

import { Box } from '../Box';

const Card = styled(Box)`
  box-shadow: ${themeGet('shadows.card')};
  ${borders};
`;

Card.defaultProps = {
  borderRadius: 'md',
};

export default Card;
