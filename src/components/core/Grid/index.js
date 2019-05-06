import styled, { css } from 'styled-components';

import { Box } from '../Box';

const getWidth = (data = 0) => {
  return (data / 12) * 100;
};

const screenLg = '1200px';
const screenMd = '1024px';
const screenSm = '768px';

export const Col = styled(Box)`
  flex: 1;

  @media (min-width: ${screenSm}) {
    ${props =>
      props.sm
        ? css`
            max-width: ${props => getWidth(props.sm)}%;
            flex-basis: ${props => getWidth(props.sm)}%;
          `
        : ''};
  }

  @media (min-width: ${screenLg}) {
    ${props =>
      props.lg
        ? css`
            max-width: ${props => getWidth(props.lg)}%;
            flex-basis: ${props => getWidth(props.lg)}%;
          `
        : ''};
  }

  @media (min-width: ${screenMd}) {
    ${props =>
      props.md
        ? css`
            max-width: ${props => getWidth(props.md)}%;
            flex-basis: ${props => getWidth(props.md)}%;
          `
        : ''};
  }
`;

const gutters = {
  default: 4,
  md: 6,
};

export const Grid = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-left: -${props => gutters[props.gutter || 'default']}px;
  margin-right: -${props => gutters[props.gutter || 'default']}px;
  flex-wrap: wrap;
  ${Col} {
    padding-left: ${props => gutters[props.gutter || 'default']}px;
    padding-right: ${props => gutters[props.gutter || 'default']}px;
  }
`;
