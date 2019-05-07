// @flow
import React, { useEffect, useReducer } from 'react';

import DonateCards from './components/DonateCards';
import { Text } from './components/core/Text';
import { getCharities, getPayments, sendPayment } from './apis';
import reducer, { initialData } from './reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    getCharities().then(data => {
      dispatch({ type: 'SET_CHARITIES', payload: data });
    });

    getPayments().then(data => {
      dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        payload: data,
      });
    });
  }, []);

  const onCardClick = (item, amount) => {
    const { id, currency } = item;
    return sendPayment({ id, amount, currency }).then(() => {
      dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        payload: [{ amount }],
      });
    });
  };

  const { donate, charities } = state;
  return (
    <div>
      <Text as="h1" textAlign="center">
        Tamboon React
      </Text>
      <Text data-testid="donations" as="p" textAlign="center" fontSize="20px">
        All donations (THB):{' '}
        <Text as="span" fontWeight="bold" color="positive">
          {donate}
        </Text>
      </Text>
      <DonateCards items={charities} onClick={onCardClick} />
    </div>
  );
}
