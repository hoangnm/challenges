// @flow
import fetch from 'isomorphic-fetch';

import { baseUrl } from '../constants';
import { type Charity } from '../types/charity';
import { type Payment } from '../types/payment';

const get = url => {
  return fetch(`${baseUrl}/${url}`).then(function(resp) {
    return resp.json();
  });
};

const post = (url, body) => {
  return fetch(`${baseUrl}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(function(resp) {
    return resp.json();
  });
};

export const getCharities = (): Promise<Charity[]> => {
  return get('charities');
};

export const getPayments = (): Promise<Payment[]> => {
  return get('payments');
};

export const sendPayment = ({
  id,
  amount,
  currency,
}: {
  id: number,
  amount: number,
  currency: string,
}) => {
  return post('payments', {
    charitiesId: id,
    amount: amount,
    currency: currency,
  });
};
