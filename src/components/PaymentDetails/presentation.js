import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddCreditCard } from 'components';

class PaymentDetails extends Component {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  renderInner() {
    const { paymentType, orderRef, setPaymentMethod, cancel } = this.props;
    switch (paymentType) {
      case 'credit':
        return (
          <AddCreditCard
            paymentType={paymentType}
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
            cancel={cancel}
          />
        );

      default:
        return null;
    }
  }

  render() {
    return <div>{this.renderInner()}</div>;
  }
}

export default PaymentDetails;
