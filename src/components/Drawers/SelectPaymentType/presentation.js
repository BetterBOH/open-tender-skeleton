import React, { Component } from 'react';
import {
  SelectPaymentMethod,
  AddPaymentType,
  PaymentDetails
} from 'components';
import PropTypes from 'prop-types';

class SelectPaymentType extends Component {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  renderInner() {
    const { screen } = this.props;
    switch (screen) {
      case 'SelectExistingPaymentMethod':
        return (
          <SelectPaymentMethod
            // selectedPaymentTypeId={this.props.selectedPaymentTypeId}
            // selectExistingPaymentType={this.props.selectExistingPaymentType}
            confirm={this.props.switchToSelectNewPaymentMethod}
            setPaymentMethod={this.props.setPaymentMethod}
            cancel={f => f}
            paymentsById={this.props.paymentsById}
            orderRef={this.props.orderRef}
          />
        );
      case 'SelectNewPaymentMethod':
        return (
          <AddPaymentType
            confirm={this.props.switchToCreatePaymentMethod}
            cancel={this.props.switchToSelectExistingPaymentMethod}
            paymentTypes={this.props.paymentTypes}
            selectPaymentMethodType={this.props.selectPaymentMethodType}
            newPaymentMethodType={this.props.newPaymentMethodType}
            paymentMethodSelected={this.props.paymentMethodSelected}
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
    return <div className="col12 z3">{this.renderInner()}</div>;
  }
}

export default SelectPaymentType;
