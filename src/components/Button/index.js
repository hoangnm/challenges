import styled, { css } from 'styled-components';

import { getColor, getTheme } from '../../theme';

const Button = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: ${getTheme('borderRadius', 'sm')};
  border: ${props =>
    props.variant !== 'text' ? css`solid 1px ${getColor('positive')}` : 'none'};
  color: ${props =>
    props.variant !== 'text' ? getColor('positive')(props) : ''};
  background-color: transparent;
  cursor: pointer;
  outline: none;
  &:hover:not(:disabled) {
    background-color: ${props =>
      props.variant !== 'text' ? getColor('positive')(props) : ''};
    color: ${props =>
      props.variant !== 'text' ? getColor('light')(props) : ''};
  }
  &:active:not(:disabled) {
    background-color: ${props =>
      props.variant !== 'text' ? getColor('positiveDark')(props) : ''};
    color: ${props =>
      props.variant !== 'text' ? getColor('light')(props) : ''};
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
