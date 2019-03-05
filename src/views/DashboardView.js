import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';
import { Button } from 'components';
import AccountDetails from 'components/AccountDetails';

class AuthView extends PureComponent {
  render() {
    const {
      actions,
      userIsAuthenticated,
      openTenderRef,
      accountDetails
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    return (
      <main className="container relative">
        <div className="p1 col-12 md:col-4">
          <AccountDetails accountDetails={accountDetails} />
          <Rewards rewards={rewards} />
          <Button onClick={() => actions.unauthenticateUser(openTenderRef)}>
            Logout
          </Button>
        </div>
      </main>
    );
  }
}

export default withComponents(AuthView);
