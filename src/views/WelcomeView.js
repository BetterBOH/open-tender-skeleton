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
  state = {
    cateringIsSelected: false
  };

  handlePickupClick = () => {
    const { actions, session } = this.props;

    actions.setServiceType(session.order.ref, Constants.ServiceTypes.PICKUP);
  };

  handleDeliveryClick = () => {
    const { actions, session } = this.props;

    actions.setServiceType(session.order.ref, Constants.ServiceTypes.DELIVERY);
  };

  handleCateringClick = () => this.setState({ cateringIsSelected: true });

  render() {
    const {
      Language,
      oloDeliveryIsAvailable,
      cateringDeliveryIsAvailable,
      locations,
      mapbox
    } = this.props;

    return (
      <main className="container">
        <CartButton className="absolute b0 r0 mr3 mb1 none md:block z1" />
        <div className="relative overflow-auto">
          <Card className="md:col-4 my2 p1">
            <Text size="headline" className="mb2">
              Enter you location below
            </Text>
            <MapboxGeocoder />
          </Card>
          <Card className="md:col-4 pb1">
            <div className="text-center my2 px1">
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
            {cateringIsSelected ? (
              <React.Fragment>
                <LinkButton iconLeft="Bag" onClick={this.handlePickupClick}>
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.catering')}{' '}
                      {Language.t('welcome.orderTypes.pickup')}
                    </span>
                  </Text>
                </LinkButton>
                {cateringDeliveryIsAvailable ? (
                  <LinkButton iconLeft="Car" onClick={this.handleDeliveryClick}>
                    <Text size="cta" className="color-light-gray">
                      <span>{Language.t('welcome.orderFor')}</span>{' '}
                      <span className="text-semibold color-gray">
                        {Language.t('welcome.orderTypes.catering')}{' '}
                        {Language.t('welcome.orderTypes.delivery')}
                      </span>
                    </Text>
                  </LinkButton>
                ) : null}
              </React.Fragment>
            ) : (
              <React.Fragment>
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

                {oloDeliveryIsAvailable ? (
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
                  <LinkButton
                    iconLeft="Group"
                    onClick={this.handleCateringClick}
                  >
                    <Text size="cta" className="color-light-gray">
                      <span>{Language.t('welcome.orderFor')}</span>{' '}
                      <span className="text-semibold color-gray">
                        {Language.t('welcome.orderTypes.catering')}
                      </span>
                    </Text>
                  </LinkButton>
                ) : null}
              </React.Fragment>
            )}
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
