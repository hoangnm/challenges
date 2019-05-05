import React, { useEffect, useReducer } from 'react';

import DonateCards from './components/DonateCards';
import { getCharities, getPayments, sendPayment } from './apis';
import reducer, { initialData } from './reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    getCharities().then(function(data) {
      dispatch({ type: 'SET_CHARITIES', payload: data });
    });

    getPayments().then(function(data) {
      dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        payload: data,
      });
    });
  }, []);

  const onCardClick = (item, amount) => {
    const { id, currency } = item;

    sendPayment({ id, amount, currency }).then(function() {
      dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        payload: [{ amount }],
      });
      dispatch({
        type: 'UPDATE_MESSAGE',
        payload: `Thanks for donate ${amount}!`,
      });

      setTimeout(function() {
        dispatch({
          type: 'UPDATE_MESSAGE',
          payload: '',
        });
      }, 2000);
    });
  };

  const style = {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };
  const { donate, message, charities } = state;

  return (
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <p style={style}>{message}</p>
      <DonateCards items={charities} onClick={onCardClick} />
    </div>
  );
}
