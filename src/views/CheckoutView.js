import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';

import { Button } from 'components';

class CheckoutView extends PureComponent {
  constructor(props) {
    super(props);
    // to do:
    // -if a user is authenticated you need to make sure they are bound to the order.
    // -if they are a guest you need to bind an object with a email, first_name, and last_name
    // -the order needs a credit card
    // -after you add a credit card you need to set the payment method on the order
    // -validating order is something that should happen before submitting an order.
    // if successful send them to another view else show error

    if (!this.props.userIsAuthenticated) {
      const customer = {
        email: `elliscmarte${Math.floor(Math.random() * 9999999)}@gmail.com`,
        first_name: 'ellis',
        last_name: 'marte'
      };
      this.props.actions.bindCustomerToOrder(this.props.order, customer);
    } else {
      this.props.actions.bindCustomerToOrder(
        this.props.order,
        this.props.customer
      );
    }
  }
  addCreditCard = () => {
    const creditCard = {
      cc_cvv: '7401',
      cc_expiration: '1023',
      cc_number: this.props.testCCs.amex[0].number,
      cc_zip: '10022'
    };
    this.props.actions.createPayment(this.props.openTenderRef, creditCard);
  };

  setPaymentMethod = () => {
    const paymentKeys = Object.keys(
      this.props.openTender.session.payments.paymentsById
    );
    const pkLength = paymentKeys.length - 1;
    const creditCard = this.props.openTender.session.payments.paymentsById[
      paymentKeys[pkLength]
    ];
    this.props.actions.setPaymentMethod(this.props.order, 'credit', creditCard);
  };

  validateOrder = () => {
    this.props.actions.validateCurrentOrder(this.props.openTenderRef);
  };

  submitOrder = () => {
    const order = this.props.order;
    if (!this.props.userIsAuthenticated) {
      order.paymentType = 'credit';
      order.creditCard = {
        cc_cvv: '7401',
        cc_expiration: '1023',
        cc_number: this.props.testCCs.amex[0].number,
        cc_zip: '10022'
      };
    }
    this.props.actions.submitOrder(this.props.openTenderRef, order);
  };

  render() {
    const { actions, userIsAuthenticated, openTenderRef } = this.props;

    // if (!userIsAuthenticated) return <Redirect to="/auth" />;

    return (
      <main className="container relative">
        <div className="p1 col-12 md:col-4 bg-color-white m1">
          <Button onClick={this.addCreditCard}>Add Card</Button>
        </div>
        <div className="p1 col-12 md:col-4 bg-color-white m1">
          <Button onClick={this.setPaymentMethod}>Set Payment</Button>
        </div>
        <div className="p1 col-12 md:col-4 bg-color-white m1">
          <Button onClick={this.validateOrder}>Validate</Button>r
        </div>
        <div className="p1 col-12 md:col-4 bg-color-white m1">
          <Button onClick={this.submitOrder}>Submit</Button>
        </div>
      </main>
    );
  }
}

export default withComponents(CheckoutView);
