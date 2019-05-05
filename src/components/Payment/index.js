import React, { useState } from 'react';
import { Flex, Box } from '../Box';
import { Text } from '../Text';
import Button from '../Button';
const defaultAmount = 10;
const payments = [10, 20, 50, 100, 500];

const Payment = ({ onClick }) => {
  const [selectedAmount, setAmount] = useState(defaultAmount);
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Text as="p" color="grey">
        Select the amount to donate (USD)
      </Text>
      <Box mb="24px">
        {payments.map(amount => (
          <Box as="label" key={amount} m="8px">
            <input
              type="radio"
              name="payment"
              checked={selectedAmount === amount}
              value={amount}
              onChange={() => setAmount(amount)}
            />
            <Text as="span" ml="4px">
              {amount}
            </Text>
          </Box>
        ))}
      </Box>
      <Button onClick={() => onClick(selectedAmount)}>Pay</Button>
    </Flex>
  );
};

export default Payment;
