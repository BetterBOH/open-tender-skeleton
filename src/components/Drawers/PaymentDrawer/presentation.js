import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SelectPaymentMethod,
  ChoosePaymentType,
  PaymentDetails
} from 'components';

class PaymentDrawer extends Component {
  static propTypes = {
    orderRef: PropTypes.object,
    paymentTypes: PropTypes.array,
    paymentsById: PropTypes.object,
    setPaymentMethod: PropTypes.func,
    resetDrawer: PropTypes.func,
    screen: PropTypes.string,
    newPaymentMethodType: PropTypes.string,
    switchToSelectExistingPaymentMethod: PropTypes.func,
    switchToSelectNewPaymentMethod: PropTypes.func,
    switchToCreatePaymentMethod: PropTypes.func,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    orderRef: {},
    paymentTypes: [],
    paymentsById: {},
    setPaymentMethod: f => f,
    resetDrawer: f => f,
    screen: PropTypes.string,
    newPaymentMethodType: '',
    switchToSelectExistingPaymentMethod: f => f,
    switchToSelectNewPaymentMethod: f => f,
    switchToCreatePaymentMethod: f => f,
    selectPaymentMethodType: f => f
  };

  renderInner() {
    const { screen } = this.props;
    switch (screen) {
      case 'SelectExistingPaymentMethod':
        return (
          <SelectPaymentMethod
            confirm={this.props.switchToSelectNewPaymentMethod}
            cancel={this.props.resetDrawer}
            paymentsById={this.props.paymentsById}
            orderRef={this.props.orderRef}
            setPaymentMethod={this.props.setPaymentMethod}
          />
        );
      case 'SelectNewPaymentMethod':
        return (
          <ChoosePaymentType
            confirm={this.props.switchToCreatePaymentMethod}
            cancel={this.props.switchToSelectExistingPaymentMethod}
            paymentTypes={this.props.paymentTypes}
            selectPaymentMethodType={this.props.selectPaymentMethodType}
            newPaymentMethodType={this.props.newPaymentMethodType}
          />
        );
      case 'CreatePaymentMethod':
        return (
          <PaymentDetails
            orderRef={this.props.orderRef}
            setPaymentMethod={this.props.setPaymentMethod}
            cancel={this.props.switchToSelectNewPaymentMethod}
            paymentType={this.props.newPaymentMethodType}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return <div className="PaymentDrawer">{this.renderInner()}</div>;
  }
}

export default PaymentDrawer;
