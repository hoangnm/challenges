import React, { useState } from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Button from '../Button';
import { Flex, Box } from '../Box';
import Payment from '../Payment';

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const DonateCard = ({ item, onClick }) => {
  const [shouldShowPayment, showPayment] = useState(false);
  return (
    <Card m="24px" position="relative">
      <Img src={`images/${item.image}`} alt="image" />
      <Flex justifyContent="space-between" alignItems="center" p="16px">
        <span>{item.name}</span>
        <Button onClick={() => showPayment(true)}>Donate</Button>
      </Flex>
      {shouldShowPayment && (
        <Flex
          position="absolute"
          bg="white"
          top="0"
          left="0"
          right="0"
          bottom="0"
          justifyContent="center"
          alignItems="center"
        >
          <Payment
            onClick={value => {
              showPayment(false);
              onClick(item, value);
            }}
          />
          <Box position="absolute" right="10px" top="20px">
            <Button onClick={() => showPayment(false)}>x</Button>
          </Box>
        </Flex>
      )}
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
