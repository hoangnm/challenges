import React from 'react';
import styled from 'styled-components';

import Card from '../Card';

const Img = styled.img`
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Button = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  border-radius: 3px;
  border: solid 1px blue;
  color: blue;
  padding: 8px 16px;
  cursor: pointer;
`;

const DonateCard = ({ payments, item, onClick }) => {
  return (
    <Card>
      <Img src={`images/${item.image}`} alt="image" />
      <Body>
        <span>{item.name}</span>
        <Button onClick={() => onClick(item)}>Donate</Button>
      </Body>
    </Card>
  );
};

export default DonateCard;
