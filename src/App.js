import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import DonateCard from './components/DonateCard';
import { summaryDonations } from './helpers';

export default connect(state => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: 10,
      };

      this.onCardClick = this.onCardClick.bind(this);
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          self.setState({ charities: data });
        });

      fetch('http://localhost:3001/payments')
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map(item => item.amount)),
          });
        });
    }

    onCardClick(item) {
      const { selectedAmount } = this.state;
      handlePay(item.id, selectedAmount, item.currency);
    }

    render() {
      const self = this;
      const cards = this.state.charities.map(function(item, i) {
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
            key={i}
            item={item}
            payments={payments}
            onClick={self.onCardClick}
          />
        );
      });

      const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
      };
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <h1>Tamboon React</h1>
          <p>All donations: {donate}</p>
          <p style={style}>{message}</p>
          {cards}
        </div>
      );
    }
  }
);

function handlePay(id, amount, currency) {
  const self = this;
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) {
        return resp.json();
      })
      .then(function() {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function() {
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      });
  };
}
