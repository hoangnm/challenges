import React, { Component } from 'react';
import { connect } from 'react-redux';

import DonateCards from './components/DonateCards';
import { getCharities, getPayments, sendPayment } from './apis';
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
      getCharities().then(function(data) {
        self.setState({ charities: data });
      });

      getPayments().then(function(data) {
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
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <h1>Tamboon React</h1>
          <p>All donations: {donate}</p>
          <p style={style}>{message}</p>
          <DonateCards
            items={this.state.charities}
            onClick={this.onCardClick}
          />
        </div>
      );
    }
  }
);

function handlePay(id, amount, currency) {
  const self = this;
  return function() {
    sendPayment().then(function() {
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
