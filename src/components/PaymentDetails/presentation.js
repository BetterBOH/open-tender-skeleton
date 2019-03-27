import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddCreditCard } from 'components';

class PaymentDetails extends Component {
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
    return <div className="col12">{this.renderInner()}</div>;
  }
}

export default PaymentDetails;
