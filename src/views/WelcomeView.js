import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { CATERING, ONLINE_ORDERING } from 'constants/OrderTypes';
import { PICKUP, DELIVERY } from 'constants/ServiceTypes';

const Card = React.lazy(() => import('components/Card'));
const Text = React.lazy(() => import('components/Text'));
const LinkButton = React.lazy(() => import('components/LinkButton'));

class WelcomeView extends Component {
  handlePickupClick = () => {
    const { actions } = this.props;

    actions.setOrderAndServiceType({
      orderType: ONLINE_ORDERING,
      serviceType: PICKUP
    });
  };

  handleDeliveryClick = () => {
    const { actions } = this.props;

    actions.setOrderAndServiceType({
      orderType: ONLINE_ORDERING,
      serviceType: DELIVERY
    });
  };

  handleCateringClick = () => {
    const { actions } = this.props;

    actions.setOrderType(CATERING);
  };

  render() {
    const { Language, deliveryIsAvailable, locations } = this.props;

    return (
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

          {locations[ONLINE_ORDERING].length ? (
            <LinkButton iconLeft="Bag" onClick={this.handlePickupClick}>
              <Text size="cta" className="color-light-gray">
                <span
                  dangerouslySetInnerHTML={{
                    __html: Language.t('welcome.orderTypes.pickup')
                  }}
                />
              </Text>
            </LinkButton>
          ) : null}

          {deliveryIsAvailable ? (
            <LinkButton iconLeft="Heart" onClick={this.handleDeliveryClick}>
              <Text size="cta" className="color-light-gray">
                <span
                  dangerouslySetInnerHTML={{
                    __html: Language.t('welcome.orderTypes.delivery')
                  }}
                />
              </Text>
            </LinkButton>
          ) : null}

          {locations[CATERING].length ? (
            <LinkButton iconLeft="Car" onClick={this.handleCateringClick}>
              <Text size="cta" className="color-light-gray">
                <span
                  dangerouslySetInnerHTML={{
                    __html: Language.t('welcome.orderTypes.catering')
                  }}
                />
              </Text>
            </LinkButton>
          ) : null}
        </Card>
      </div>
    );
  }
}

export default withComponents(withLocales(WelcomeView));
