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
    sendPayment({ id, amount, currency }).then(() => {
      dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        payload: [{ amount }],
      });
      dispatch({
        type: 'UPDATE_MESSAGE',
        payload: `Thanks for donate ${amount}!`,
      });
      setTimeout(() => {
        dispatch({
          type: 'UPDATE_MESSAGE',
          payload: '',
        });
      }, 2000);
    });
  };

  const { donate, message, charities } = state;
  return (
    <div>
      <Text as="h1" textAlign="center">
        Tamboon React
      </Text>
      <Text data-testid="donations" as="p" textAlign="center">
        All donations: {donate}
      </Text>
      <Text
        data-testId="message"
        as="p"
        textAlign="center"
        fontWeight="bold"
        fontSize="16px"
        color="red"
        m="1em 0"
      >
        {message}
      </Text>
      <DonateCards items={charities} onClick={onCardClick} />
    </div>
  );
}
