import React, { Component } from 'react';
import {
  SelectPaymentMethod,
  AddPaymentType,
  AddPaymentDetails
} from 'components';
import PropTypes from 'prop-types';

class SelectPaymentType extends Component {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  constructor(props) {
    super(props);
    this.state = {
      screen: 'SelectExistingPaymentMethod'
    };
  }

  switchToSelectExistingPaymentMethod = () => {
    this.setState({ screen: 'SelectExistingPaymentMethod' });
  };

  switchToSelectNewPaymentMethod = () => {
    this.setState({ screen: 'SelectNewPaymentMethod' });
  };

  switchToCreatePaymentMethod = () => {
    this.setState({ screen: 'CreatePaymentMethod' });
  };

  renderInner() {
    const { screen } = this.state;
    console.log('screen', screen);
    switch (screen) {
      case 'SelectExistingPaymentMethod':
        return (
          <SelectPaymentMethod
            confirm={this.switchToSelectNewPaymentMethod}
            cancel={f => f}
            paymentTypes={this.props.paymentTypes}
          />
        );
      case 'SelectNewPaymentMethod':
        return (
          <AddPaymentType
            confirm={this.switchToCreatePaymentMethod}
            cancel={this.switchToSelectExistingPaymentMethod}
            paymentTypes={this.props.paymentTypes}
          />
        );
      case 'CreatePaymentMethod':
        return (
          <AddPaymentDetails
            confirm={f => f}
            cancel={this.switchToSelectNewPaymentMethod}
            paymentTypes={this.props.paymentTypes}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { paymentTypes } = this.props;

    return <div className="col12 z3">{this.renderInner()}</div>;
  }
}

export default SelectPaymentType;
