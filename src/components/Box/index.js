import styled from 'styled-components';

export const Box = styled.div`
  width: ${props => props.width};
  padding: ${props => props.p};
  margin: ${props => props.m};
`;

export const Flex = styled(Box)`
  display: flex;
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
