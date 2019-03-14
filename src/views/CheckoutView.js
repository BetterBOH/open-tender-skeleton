import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';

class CheckoutView extends PureComponent {
  render() {
    const { userIsAuthenticated } = this.props;

    return <main className="container relative" />;
  }
}

export default withComponents(CheckoutView);
