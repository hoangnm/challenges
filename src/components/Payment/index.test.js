import React from 'react';
import { renderWithTheme, cleanup, fireEvent } from 'testUtils';

import { payments } from '../../constants';
import Payment from './';

describe('Payment component', () => {
  let onClick;
  let queries;
  const init = () => {
    onClick = jest.fn();
    queries = renderWithTheme(<Payment onClick={onClick} />);
  };

  afterEach(() => {
    cleanup();
  });

  test('should render amount payment options', () => {
    init();
    const { getAllByTestId } = queries;
    const options = getAllByTestId(/^payment-option/);
    options.forEach((option, i) => {
      const input = option.querySelector('input');
      const text = option.textContent;
      expect(text).toBe(`${payments[i]}`);
      expect(input.value).toBe(`${payments[i]}`);
      if (input.value == payments[0]) {
        expect(input.checked).toBe(true);
      }
    });
    expect(options.length).toBe(5);
  });

  test('should handle onClick with selected value', () => {
    init();
    const { getByTestId } = queries;
    const paymentBtn = getByTestId('payment-payBtn');
    fireEvent.click(paymentBtn);

    expect(onClick).toHaveBeenCalledWith(payments[0]);

    fireEvent.click(getByTestId(`payment-option-${payments[2]}`));

    fireEvent.click(paymentBtn);

    expect(onClick).toHaveBeenCalledWith(payments[2]);
  });
});
