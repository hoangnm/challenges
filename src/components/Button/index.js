import styled, { css } from 'styled-components';

import { getColor, getTheme } from '../../theme';

const Button = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: ${getTheme('borderRadius', 'sm')};
  border: solid 1px ${getColor('positive')};
  color: ${getColor('positive')};
  cursor: pointer;
  outline: none;
  &:hover:not(:disabled) {
    background-color: ${getColor('positive')};
    color: ${getColor('light')};
  }
  &:active:not(:disabled) {
    background-color: ${getColor('positiveDark')};
    color: ${getColor('light')};
  }
  ${props => {
    switch (props.size) {
      case 'md':
        return css`
          padding: 8px 16px;
          font-size: 14px;
        `;
    }
  }};
`;

Button.defaultProps = {
  size: 'md',
};

export default Button;
