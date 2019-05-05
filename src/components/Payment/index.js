import React, { useState } from 'react';
import { Flex, Box } from '../Box';
import Button from '../Button';
const defaultAmount = 10;
const payments = [10, 20, 50, 100, 500];

const Payment = ({ onClick }) => {
  const [selectedAmount, setAmount] = useState(defaultAmount);
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Box>
        {payments.map((amount, j) => (
          <label key={j}>
            <input
              type="radio"
              name="payment"
              onClick={() => setAmount(amount)}
            />
            <span>{amount}</span>
          </label>
        ))}
      </Box>
      <Button onClick={() => onClick(selectedAmount)}>Pay</Button>
    </Flex>
  );
};

export default Payment;
