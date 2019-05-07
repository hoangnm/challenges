// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';

import { type Charity } from '../../types/charity';
import Card from '../core/Card';
import Button from '../core/Button';
import { Flex, Box } from '../core/Box';
import { Text } from '../core/Text';
import { Grid, Col, Container } from '../core/Grid';
import Payment from '../Payment';

const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
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
  const [shouldShowSuccess, showSuccess] = useState(false);
  const onPaymentClick = value => {
    onClick(item, value).then(() => {
      showSuccess(true);
      setTimeout(() => {
        showPayment(false);
        showSuccess(false);
      }, 1000);
    });
  };
  return (
    <Card
      data-testid={`donate-${item.id}`}
      m="20px"
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
        flexDirection="column"
      >
        {shouldShowSuccess && (
          <Text
            data-testId={`${item.id}-message`}
            as="div"
            textAlign="center"
            fontWeight="bold"
            color="positive"
            m="1em 0"
          >
            Thanks for donate !
          </Text>
        )}
        <Payment onClick={onPaymentClick} />
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

type DonateCardsProps = {
  items: Charity[],
  onClick: (item: Charity, amount: number) => Promise<any>,
};

const DonateCards = ({ items, onClick }: DonateCardsProps) => {
  return (
    <Container>
      <Grid>
        {items.map(item => (
          <Col sx="12" lg="6" md="6" sm="12" key={item.id}>
            <DonateCard item={item} onClick={onClick} />
          </Col>
        ))}
      </Grid>
    </Container>
  );
};

export default DonateCards;
