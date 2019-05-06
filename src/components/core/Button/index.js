import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';

const Button = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: ${themeGet('radii.sm')}px;
  border: ${props =>
    props.variant !== 'text'
      ? css`solid 1px ${themeGet('colors.positive')}`
      : 'none'};
  color: ${props =>
    props.variant !== 'text' ? themeGet('colors.positive')(props) : ''};
  background-color: transparent;
  cursor: pointer;
  outline: none;
  &:hover:not(:disabled) {
    background-color: ${props =>
      props.variant !== 'text' ? themeGet('colors.positive')(props) : ''};
    color: ${props =>
      props.variant !== 'text' ? themeGet('colors.light')(props) : ''};
  }
  &:active:not(:disabled) {
    background-color: ${props =>
      props.variant !== 'text' ? themeGet('colors.positiveDark')(props) : ''};
    color: ${props =>
      props.variant !== 'text' ? themeGet('colors.light')(props) : ''};
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
