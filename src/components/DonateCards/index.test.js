import React from 'react';
import { renderWithTheme, cleanup, fireEvent } from 'testUtils';

import DonateCards from './';

jest.mock('../Payment', () => {
  // eslint-disable-next-line
  const Payment = ({ onClick, ...rest }) => (
    <button {...rest} onClick={() => onClick(10)}>
      Pay
    </button>
  );
  return Payment;
});

jest.mock('react-transition-group/CSSTransition', () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(
    props =>
      props.in ? <FakeTransition>{props.children}</FakeTransition> : null
  );
  return FakeCSSTransition;
});

describe('DonateCards component', () => {
  let queries;
  let onItemClick;
  const items = [
    {
      id: 1,
      image: 'url1',
      name: 'item 1',
    },
    {
      id: 2,
      image: 'url2',
      name: 'item 2',
    },
  ];
  const init = (data = items) => {
    onItemClick = jest.fn();
    queries = renderWithTheme(
      <DonateCards items={data} onClick={onItemClick} />
    );
  };

  afterEach(() => {
    cleanup();
  });

  test('should render list card items', () => {
    init();
    const { getAllByTestId } = queries;
    const cards = getAllByTestId(/^donate-/);
    expect(cards.length).toBe(2);
  });

  test('should render donate card item correctly', () => {
    init();
    const { getByTestId, queryByText } = queries;
    const card = getByTestId(`donate-${items[0].id}`);
    const title = card.querySelector('span');
    const img = card.querySelector('img');
    const payment = queryByText('Pay');

    expect(title.textContent).toBe(items[0].name);
    expect(img.src).toBe(`http://localhost/images/${items[0].image}`);
    expect(img.alt).toBe(items[0].name);
    expect(payment).toBeNull();
  });

  test('should show payment when click donate', () => {
    init();
    const { getByTestId, queryByText } = queries;
    const donateBtn = getByTestId(`${items[0].id}-donateBtn`);
    fireEvent.click(donateBtn);
    const payment = queryByText('Pay');

    expect(payment).toBeTruthy();
  });

  test('should close payment when click close payment', () => {
    init();
    const { getByTestId, queryByText } = queries;
    const donateBtn = getByTestId(`${items[0].id}-donateBtn`);
    fireEvent.click(donateBtn);
    const closeBtn = getByTestId(`${items[0].id}-closeBtn`);
    fireEvent.click(closeBtn);
    const payment = queryByText('Pay');

    expect(payment).toBeNull();
  });

  test('should trigger onClick when click payment is triggered', () => {
    init();
    const { getByTestId, queryByText } = queries;
    const donateBtn = getByTestId(`${items[0].id}-donateBtn`);
    fireEvent.click(donateBtn);
    let payment = queryByText('Pay');
    fireEvent.click(payment);
    payment = queryByText('Pay');
    const amount = 10;

    expect(payment).toBeNull();
    expect(onItemClick).toHaveBeenCalledWith(items[0], amount);
  });
});
