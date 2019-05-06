import React, { useState } from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';

import Card from '../Card';
import Button from '../Button';
import { Flex, Box } from '../Box';
import { Text } from '../Text';
import { Grid, Col } from '../Grid';
import Payment from '../Payment';

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const PaymentBox = transition(Flex)`
  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity 300ms ease-out;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

const DonateCard = ({ item, onClick }) => {
  const [shouldShowPayment, showPayment] = useState(false);
  return (
    <Card
      data-testid={`donate-${item.id}`}
      m="24px"
      position="relative"
      as="section"
    >
      <Img src={`images/${item.image}`} alt={item.name} />
      <Flex justifyContent="space-between" alignItems="center" p="16px">
        <Text fontSize="18px" as="span">
          {item.name}
        </Text>
        <Button
          data-testid={`${item.id}-donateBtn`}
          onClick={() => showPayment(true)}
        >
          Donate
        </Button>
      </Flex>
      <PaymentBox
        in={shouldShowPayment}
        unmountOnExit
        timeout={300}
        position="absolute"
        bg="light1"
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
        <Box position="absolute" right="10px" top="10px">
          <Button
            data-testid={`${item.id}-closeBtn`}
            variant="text"
            onClick={() => showPayment(false)}
          >
            <Text fontSize="20px">x</Text>
          </Button>
        </Box>
      </PaymentBox>
    </Card>
  );
};

const DonateCards = ({ items, onClick }) => {
  return (
    <Grid>
      {items.map(item => (
        <Col lg="6" md="6" sm="12" key={item.id}>
          <DonateCard item={item} onClick={onClick} />
        </Col>
      ))}
    </Grid>
  );
};

export default DonateCards;
