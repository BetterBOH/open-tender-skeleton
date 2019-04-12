import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { Rewards, Button, AccountDetails, DashboardHero } from 'components';

class DashboardView extends PureComponent {
  render() {
    const {
      actions,
      userIsAuthenticated,
      openTenderRef,
      accountDetails,
      rewards
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    return (
      <main className="container relative">
        <DashboardHero />
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

export default DashboardView;
