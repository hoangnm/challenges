import styled from 'styled-components';

export const Box = styled.div`
  position: ${props => props.position};
  width: ${props => props.width};
  padding: ${props => props.p};
  margin: ${props => props.m};
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  background: ${props => props.bg};
  color: ${props => props.color};
`;

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
