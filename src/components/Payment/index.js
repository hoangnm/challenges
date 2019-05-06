// @flow
import React, { useState } from 'react';

import { payments } from '../../constants';
import { Flex, Box } from '../core/Box';
import { Text } from '../core/Text';
import Button from '../core/Button';

const defaultAmount = 10;

type Props = {
  onClick: (value: number) => void,
};

const Payment = ({ onClick }: Props) => {
  const [selectedAmount, setAmount] = useState(defaultAmount);
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Text as="p">Select the amount to donate (USD)</Text>
      <Box mb="24px">
        {payments.map(amount => (
          <Box
            data-testid={`payment-option-${amount}`}
            as="label"
            key={amount}
            m="8px"
          >
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
      <Button
        data-testid="payment-payBtn"
        onClick={() => onClick(selectedAmount)}
      >
        Pay
      </Button>
    </Flex>
  );
};

export default Payment;
