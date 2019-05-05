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

  const onCardClick = item => {
    const { selectedAmount: amount } = state;
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

  /* const cards = this.state.charities.map(function(item, i) {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <label key={j}>
            <input
              type="radio"
              name="payment"
              onClick={function() {
                self.setState({ selectedAmount: amount });
              }}
            />{' '}
            {amount}
          </label>
        ));

        return (
          <DonateCard
            key={item.id}
            item={item}
            payments={payments}
            onClick={self.onCardClick}
          />
        );
      });
      */

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
