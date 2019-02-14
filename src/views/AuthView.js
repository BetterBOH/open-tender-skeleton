import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { AuthEmailCheck } from 'components';
import get from 'utils/get';

class AuthView extends Component {
  render() {
    const { attemptedCustomerEmail, customer } = this.props;

    if (!!get(customer, 'customer_id')) return <Redirect to="/dashboard" />;

    return (
      <main className="container relative">
        <div className="p1 col-12 md:col-4">
          {!attemptedCustomerEmail && AuthEmailCheck}
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(AuthView));
