import fetch from 'isomorphic-fetch';

import { baseUrl } from '../constants';

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

export const getCharities = () => {
  return get('charities');
};

export const getPayments = () => {
  return get('payments');
};

export const sendPayment = ({ id, amount, currency }) => {
  return post('payments', {
    charitiesId: id,
    amount: amount,
    currency: currency,
  });
};
