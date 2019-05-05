import React from 'react';

import Card from '../Card';

const DonateCard = ({ payments, item, onClick }) => {
  return (
    <Card>
      <p>{item.name}</p>
      {payments}
      <button onClick={() => onClick(item)}>Pay</button>
    </Card>
  );
};

export default DonateCard;
