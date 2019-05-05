import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3001';

export const getCharities = () => {
  return fetch(`${baseUrl}/charities`).then(function(resp) {
    return resp.json();
  });
};

export const getPayments = () => {
  return fetch(`${baseUrl}/payments`).then(function(resp) {
    return resp.json();
  });
};

export const sendPayment = ({ id, amount, currency }) => {
  return fetch(`${baseUrl}/payments`, {
    method: 'POST',
    body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
  }).then(function(resp) {
    return resp.json();
  });
};
