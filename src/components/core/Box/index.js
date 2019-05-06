import styled from 'styled-components';
import {
  space,
  display,
  position,
  top,
  right,
  bottom,
  left,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  flex,
  order,
  color,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';

export const Box = styled.div`
  ${space};
  ${display};
  ${width};
  ${minWidth};
  ${maxWidth};
  ${height};
  ${minHeight};
  ${maxHeight};
  ${flex};
  ${order};
  ${alignSelf};
  ${color};
  ${position};
  ${top};
  ${right};
  ${bottom};
  ${left};
`;

export const Flex = styled(Box)`
  display: flex;
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
`;
