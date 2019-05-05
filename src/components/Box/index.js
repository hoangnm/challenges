import styled from 'styled-components';

import { getColor } from '../../theme';

export const Box = styled.div`
  position: ${props => props.position};
  width: ${props => props.width};
  padding: ${props => props.p};

  margin-left: ${props => props.ml};
  margin-bottom: ${props => props.mb};
  margin: ${props => props.m};
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  background: ${props => getColor(props.bg)(props)};
  color: ${props => props.color};
`;

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
