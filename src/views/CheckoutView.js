import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';

class CheckoutView extends PureComponent {
  render() {
    return (
      <main className="container relative">
        <div
          onClick={() => this.props.actions.setDrawer('SELECT_PAYMENT_TYPE')}
        >
          AddPayment
        </div>
        <div onClick={() => this.props.actions.resetDrawer()}>Reset</div>
      </main>
    );
  }
}

export default withComponents(CheckoutView);
