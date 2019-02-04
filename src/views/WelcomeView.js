import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { Constants } from 'brandibble-redux';

const Card = React.lazy(() => import('components/Card'));
const Text = React.lazy(() => import('components/Text'));
const LinkButton = React.lazy(() => import('components/LinkButton'));

class WelcomeView extends Component {
  handlePickupClick = () => {
    const { actions } = this.props;

    actions.setOrderAndServiceType({
      orderType: Constants.OrderTypes.ONLINE_ORDERING,
      serviceType: Constants.ServiceTypes.PICKUP
    });
  };

  handleDeliveryClick = () => {
    const { actions } = this.props;

    actions.setOrderAndServiceType({
      orderType: Constants.OrderTypes.ONLINE_ORDERING,
      serviceType: Constants.ServiceTypes.DELIVERY
    });
  };

  handleCateringClick = () => {
    const { actions } = this.props;

    actions.setOrderType(Constants.OrderTypes.CATERING);
  };

  render() {
    const { Language, deliveryIsAvailable, locations } = this.props;

    return (
      <main className="container">
        <div className="relative">
          <Card className="md:col-4 pb1">
            <div className="text-center my2">
              <Text
                size="small"
                className="block text-semibold uppercase color-light-gray letter-spacing-sm"
              >
                {Language.t('welcome.adlib')}
              </Text>
              <Text size="headline" className="block my1">
                {Language.t('welcome.headline')}
              </Text>
              <Text size="description" className="block color-light-gray">
                {Language.t('welcome.description')}
              </Text>
            </div>

            {locations[Constants.OrderTypes.ONLINE_ORDERING].length ? (
              <LinkButton iconLeft="Bag" onClick={this.handlePickupClick}>
                <Text size="cta" className="color-light-gray">
                  <span>{Language.t('welcome.orderFor')}</span>{' '}
                  <span className="text-semibold color-gray">
                    {Language.t('welcome.orderTypes.pickup')}
                  </span>
                </Text>
              </LinkButton>
            ) : null}

            {deliveryIsAvailable ? (
              <LinkButton iconLeft="Car" onClick={this.handleDeliveryClick}>
                <Text size="cta" className="color-light-gray">
                  <span>{Language.t('welcome.orderFor')}</span>{' '}
                  <span className="text-semibold color-gray">
                    {Language.t('welcome.orderTypes.delivery')}
                  </span>
                </Text>
              </LinkButton>
            ) : null}

            {locations[Constants.OrderTypes.CATERING].length ? (
              <LinkButton iconLeft="Group" onClick={this.handleCateringClick}>
                <Text size="cta" className="color-light-gray">
                  <span>{Language.t('welcome.orderFor')}</span>{' '}
                  <span className="text-semibold color-gray">
                    {Language.t('welcome.orderTypes.catering')}
                  </span>
                </Text>
              </LinkButton>
            ) : null}
          </Card>
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(WelcomeView));
