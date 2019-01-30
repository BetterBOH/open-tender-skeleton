import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { Constants } from 'brandibble-redux';

import { Card, Text, LinkButton, MapboxMap, LocationCard  } from 'components';

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

    const mockLocation = {
      name: 'Bleecker Street',
      distance: '1.1 miles away',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/16/0b/ec/c5/we-believe-we-have-a.jpg',
      address: '255 Bleecker Street, New York, New York, 10014',
      phone: '646-964-5984',
      hours: {
        monday: '11AM to 11PM',
        tuesday: '11AM to 11PM',
        wednesday: '11AM to 11PM',
        thursday: '11AM to 11PM',
        friday: '11AM to 11PM',
        saturday: '11AM to 11PM',
        sunday: '11AM to 11PM'
      },
      locationIsOpen: true
    };

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
            </div>
          </Card>
          <div className="col-12 md:col-3">
            <LocationCard {...mockLocation} />
          </div>
          <Card className="md:col-4">
            <MapboxMap {...mapbox} />
          </Card>
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(WelcomeView));
