import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Button from '../Button';
import { Flex, Box } from '../Box';

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const DonateCard = ({ item, onClick }) => {
  return (
    <Card m="24px">
      <Img src={`images/${item.image}`} alt="image" />
      <Flex justifyContent="space-between" alignItems="center" p="16px">
        <span>{item.name}</span>
        <Button onClick={() => onClick(item)}>Donate</Button>
      </Flex>
    </Card>
  );
};

const DonateCards = ({ items, onClick }) => {
  return (
    <Flex flexWrap="wrap">
      {items.map(item => (
        <Box width="50%" key={item.id}>
          <DonateCard item={item} onClick={onClick} />
        </Box>
      ))}
    </Flex>
  );
};

export default DonateCards;
