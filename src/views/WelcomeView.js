import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';
import withMapbox from 'lib/withMapbox';

import { Constants } from 'brandibble-redux';

import get from 'utils/get';
import { location } from 'constants/Mocks';
import {
  Card,
  Text,
  LinkButton,
  MapboxMap,
  MapboxGeocoder,
  LocationCard,
  CartButton
} from 'components';

const orderTypesStub = {
  [Constants.OrderTypes.CATERING]: [],
  [Constants.OrderTypes.ONLINE_ORDERING]: []
};

class WelcomeView extends Component {
  render() {
    const { localesContext, mapbox, brand, actions, orderRef } = this.props;

    const { Language } = localesContext;
    const orderTypes = get(brand, 'order_types', orderTypesStub);

    return (
      <main className="container">
        <CartButton className="absolute b0 r0 mr3 mb1 none md:block z1" />
        <div className="relative overflow-auto">
          <Card className="md:col-4 my2 p1">
            <Text size="headline" className="mb2">
              Enter your location below
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
            <React.Fragment>
              {get(orderTypes, Constants.OrderTypes.ONLINE_ORDERING).includes(
                Constants.ServiceTypes.PICKUP
              ) ? (
                <LinkButton
                  iconLeft="Bag"
                  onClick={() =>
                    actions.setOrderAndServiceType(
                      orderRef,
                      Constants.OrderTypes.ONLINE_ORDERING,
                      Constants.ServiceTypes.PICKUP
                    )
                  }
                >
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.pickup')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}

              {get(orderTypes, Constants.OrderTypes.ONLINE_ORDERING).includes(
                Constants.ServiceTypes.DELIVERY
              ) ? (
                <LinkButton
                  iconLeft="Car"
                  onClick={() =>
                    actions.setOrderAndServiceType(
                      orderRef,
                      Constants.OrderTypes.ONLINE_ORDERING,
                      Constants.ServiceTypes.DELIVERY
                    )
                  }
                >
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.delivery')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}

              {get(orderTypes, Constants.OrderTypes.CATERING).includes(
                Constants.ServiceTypes.PICKUP
              ) ? (
                <LinkButton
                  iconLeft="Group"
                  onClick={() =>
                    actions.setOrderAndServiceType(
                      orderRef,
                      Constants.OrderTypes.CATERING,
                      Constants.ServiceTypes.PICKUP
                    )
                  }
                >
                  <Text size="cta" className="color-light-gray">
                    <span>{Language.t('welcome.orderFor')}</span>{' '}
                    <span className="text-semibold color-gray">
                      {Language.t('welcome.orderTypes.catering')}{' '}
                      {Language.t('welcome.orderTypes.pickup')}
                    </span>
                  </Text>
                </LinkButton>
              ) : null}

              {get(orderTypes, Constants.OrderTypes.CATERING).includes(
                Constants.ServiceTypes.DELIVERY
              ) ? (
                <LinkButton
                  iconLeft="Group"
                  onClick={() =>
                    actions.setOrderAndServiceType(
                      orderRef,
                      Constants.OrderTypes.CATERING,
                      Constants.ServiceTypes.DELIVERY
                    )
                  }
                >
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
          </Card>
          <div className="col-12 md:col-3">
            <LocationCard location={location} localesContext={localesContext} />
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
