import React from 'react';
import {
  renderWithTheme,
  cleanup,
  fireEvent,
  act,
  wait,
  waitForElement,
} from 'testUtils';

import App from './App';
import { getCharities, getPayments, sendPayment } from './apis';

jest.mock('./apis', () => {
  return {
    getCharities: jest.fn(),
    getPayments: jest.fn(),
    sendPayment: jest.fn(),
  };
});

describe('App component', () => {
  let queries;
  const charities = [
    {
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
      currency: 'THB',
    },
  ];
  const payments = [
    {
      charitiesId: 2,
      amount: 10,
      currency: 'THB',
      id: 1,
    },
  ];

  const init = () => {
    getCharities.mockReturnValueOnce(Promise.resolve(charities));
    getPayments.mockReturnValueOnce(Promise.resolve(payments));
    queries = renderWithTheme(<App />);
  };

  afterEach(() => {
    cleanup();
  });

  test('should fetch data when component is mounted', done => {
    act(() => {
      init();
    });
    const { getByTestId, getAllByTestId } = queries;
    const donations = getByTestId('donations');

    expect(getCharities).toHaveBeenCalledTimes(1);

    expect(getPayments).toHaveBeenCalledTimes(1);
    expect(donations.textContent).toBe('All donations (THB): 0');
    waitForElement(() => {
      return getAllByTestId(/^donate-/);
    }).then(cards => {
      expect(cards.length).toBe(1);
      expect(donations.textContent).toBe('All donations (THB): 10');
      done();
    });
  });

  test('should send payment when card item is clicked', done => {
    act(() => {
      init();
    });

    sendPayment.mockReturnValueOnce(Promise.resolve());

    const { getByTestId } = queries;

    waitForElement(() => {
      return getByTestId(`${charities[0].id}-donateBtn`);
    }).then(donateBtn => {
      fireEvent.click(donateBtn);
      let payment = getByTestId('payment-payBtn');

      const donations = getByTestId('donations');
      fireEvent.click(payment);
      const { id, currency } = charities[0];

      wait(sendPayment).then(() => {
        expect(sendPayment).toHaveBeenCalledWith({ id, currency, amount: 10 });
        expect(donations.textContent).toBe('All donations (THB): 20');
        done();
      });
    });
  });
});
