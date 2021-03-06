import styled, { css } from 'styled-components';

import { Box } from '../Box';

const getWidth = (data = 0) => {
  return (data / 12) * 100;
};

const screenLg = '1200px';
const screenMd = '1024px';
const screenSm = '768px';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${screenSm}) {
    width: ${screenSm};
  }

  @media (min-width: ${screenMd}) {
    width: ${screenMd};
  }

  @media (min-width: ${screenLg}) {
    width: ${screenLg};
  }
`;

export const Col = styled(Box)`
  flex: 1;

  ${props =>
    props.sx
      ? css`
          max-width: ${props => getWidth(props.sx)}%;
          flex-basis: ${props => getWidth(props.sx)}%;
        `
      : ''};

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

export const Grid = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
