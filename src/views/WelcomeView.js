import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';
import withMapbox from 'lib/withMapbox';

import { Constants } from 'brandibble-redux';
import { location } from 'constants/Mocks';
import {
  Card,
  Text,
  LinkButton,
  MapboxMap,
  LocationCard,
  CartButton
} from 'components';

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
    const { Language, deliveryIsAvailable, locations, mapbox } = this.props;

    console.log('MAP', mapbox);

    return (
      <main className="container">
        <CartButton className="absolute b0 r0 mr3 mb1 none md:block z1" />
        <div className="relative">
          <Card className="md:col-4 pb1 m1">
            <div className="text-center mx1 my2">
              <Text
                size="small"
                className="block text-semibold uppercase color-light-gray letter-spacing-xs"
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
            <div className="m1">
              {locations[Constants.OrderTypes.ONLINE_ORDERING].length ? (
                <LinkButton
                  className="mb1"
                  iconLeft="Bag"
                  onClick={this.handlePickupClick}
                >
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.pickup')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}

              {deliveryIsAvailable ? (
                <LinkButton
                  className="mb1"
                  iconLeft="Car"
                  onClick={this.handleDeliveryClick}
                >
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
            </div>
          </Card>
          <div className="col-12 md:col-3">
            <LocationCard location={location} />
          </div>
          <Card className="md:col-4 m1">
            <MapboxMap {...mapbox} />
          </Card>
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(withMapbox(WelcomeView)));
