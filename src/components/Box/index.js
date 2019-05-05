import styled from 'styled-components';

export const Box = styled.div`
  position: ${props => props.position};
  width: ${props => props.width};
  padding: ${props => props.p};
  margin: ${props => props.m};
  background: ${props => props.bg};
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
`;

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
