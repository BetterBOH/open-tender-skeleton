import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Text,
  Rewards,
  Button,
  AccountDetails,
  DashboardHero
} from 'components';

class DashboardView extends PureComponent {
  render() {
    const {
      actions,
      customer,
      userIsAuthenticated,
      openTenderRef,
      accountDetails,
      rewards
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    return (
      <main className="DashboardView container relative">
        <DashboardHero customer={customer} />
        <div className="flex flex-wrap justify-center p1 col-12 bg-color-gray-light ">
          <div className="col-12 md:col-4 md:py3">
            <div className="mb3">
              <Rewards rewards={rewards} />
            </div>
            <div className="mb3">
              <AccountDetails accountDetails={accountDetails} />
            </div>
            <Button
              variant="primary"
              className="col-12 bg-color-gray-dark"
              onClick={() => actions.unauthenticateUser(openTenderRef)}
            >
              <Text size="cta" className="text-semibold color-white">
                Logout
              </Text>
            </Button>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardView;
