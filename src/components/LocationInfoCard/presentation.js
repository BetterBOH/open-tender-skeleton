import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Constants } from 'brandibble-redux';

import { Card, Button, Text, Icon, LinkButton } from 'components';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';
import get from 'utils/get';
import buildQueryString from 'utils/buildQueryString';
import getRoutes from 'utils/getRoutes';
import { FLAGS, isEnabled } from 'utils/featureFlags';

import Days from 'constants/Days';
import CLOSED from 'constants/Closed';

class LocationInfoCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const {
      location,
      className,
      orderData,
      localesContext,
      brandContext
    } = this.props;

    const {
      name,
      street_address,
      city,
      state_code,
      zip_code,
      phone_number,
      is_closed,
      hours_pickup
    } = location;

    const serviceType = get(orderData, 'service_type');

    const { Language } = localesContext;

    const { hoursDropdownIsOpen } = this.state;

    const hours = hours_pickup.reduce((openHours, day) => {
      const dayOfTheWeek = Object.values(Days).find(
        value => value === day.weekday
      );
      const open =
        day.open === CLOSED ? CLOSED : getTimeFromMilitaryTime(day.open);
      const close =
        day.close === CLOSED ? CLOSED : getTimeFromMilitaryTime(day.close);

      openHours[dayOfTheWeek] = {
        open,
        close
      };

      return openHours;
    }, {});

    const today = Days[new Date().getDay()];

    const query = buildQueryString([
      street_address,
      city,
      state_code,
      zip_code
    ]);

    return (
      <div className={cx('LocationInfoCard', className)}>
        <Card variant="location-card" className="bg-color-white shadow-md">
          <div className="LocationInfoCard__info w100 my_5 p1 md:px2">
            <Text size="cta" className="text-bold">
              {name}
            </Text>
            <LinkButton
              className="color-gray-dark hover-color-black"
              iconLeft="Location"
              iconLeftFill={get(brandContext, 'colors[gray-light]')}
              iconRight="Details"
              iconRightFill={get(brandContext, 'colors[gray-light]')}
              variant="small"
              to={
                !!query
                  ? `https://www.google.com/maps/search/?api=1&query=${query}`
                  : null
              }
              ariaLabel={`${Language.t(
                'location.searchFor'
              )} ${name} ${Language.t('location.locationInGoogleMaps')}`}
              anchorTitle={`${Language.t(
                'location.searchFor'
              )} ${name} ${Language.t('location.locationInGoogleMaps')}`}
            >
              <Text
                size="detail"
                className="block nowrap overflow-hidden text-overflow-ellipsis"
              >
                {street_address}
              </Text>
            </LinkButton>
            <LinkButton
              className="color-gray-dark hover-color-black"
              iconLeft="Phone"
              iconLeftFill={get(brandContext, 'colors[gray-light]')}
              iconRight="Details"
              iconRightFill={get(brandContext, 'colors[gray-light]')}
              variant="small"
              to={`tel:${phone_number}`}
              ariaLabel={`Call ${name} location`}
              anchorTitle={`Call ${name} location`}
            >
              <Text size="detail">{phone_number}</Text>
            </LinkButton>
            <LinkButton
              className="color-gray-dark hover-color-black"
              iconLeft="Clock"
              iconLeftFill={get(brandContext, 'colors[gray-light]')}
              iconRight={hoursDropdownIsOpen ? 'Dropup' : 'Dropdown'}
              iconRightFill={get(brandContext, 'colors[gray-light]')}
              variant="small"
              onClick={
                hoursDropdownIsOpen
                  ? this.closeHoursDropdown
                  : this.openHoursDropdown
              }
            >
              <Text
                size="detail"
                className={cx({
                  'color-black text-semibold': hoursDropdownIsOpen
                })}
              >
                {!is_closed
                  ? `${Language.t('location.openNow')}: ${
                      hours[today].open
                    } ${Language.t('global.to')} ${
                      hours[today].close
                    } ${Language.t('global.today')}`
                  : `${Language.t('location.closedNow')}`}
              </Text>
            </LinkButton>
            {hoursDropdownIsOpen ? (
              <div className="LocationCard__hours-dropdown">
                {Object.entries(hours).map(([day, hours]) => (
                  <div className="my1 pl2" key={day}>
                    <Text size="detail" className="color-gray-dark">
                      {`${Language.t(`global.weekdays.${day.toLowerCase()}`)}
                      ${hours.open} ${Language.t('global.to')} ${hours.close}`}
                    </Text>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="flex justify-between mt2 mx1 md:mx0">
              <Button
                variant="secondary"
                className="bg-color-gray-lighter hover-bg-color-gray-light flex items-center px1_5 py_5"
                to={
                  serviceType === Constants.ServiceTypes.PICKUP
                    ? getRoutes().LOCATIONS
                    : getRoutes().DELIVERY
                }
              >
                <div className="LocationInfoCard__button-icon mr_5">
                  <Icon icon="Repeat" fill={get(brandContext, 'colors.gray')} />
                </div>
                <Text
                  size="extra-small"
                  className="text-extra-bold color-gray-dark uppercase letter-spacing-sm"
                >
                  {serviceType === Constants.ServiceTypes.PICKUP
                    ? Language.t('location.changeLocation')
                    : Language.t('location.changeDeliveryAddress')}
                </Text>
              </Button>
              <div>
                {isEnabled(FLAGS.MENU_SHARING) && (
                  <Button
                    variant="icon-circle-secondary"
                    className="bg-color-gray-lighter hover-bg-color-gray-light circle p_5"
                    onClick={f => f}
                  >
                    <Icon
                      icon="Share"
                      fill={get(brandContext, 'colors.gray')}
                    />
                  </Button>
                )}
                {isEnabled(FLAGS.FAVORITING) && (
                  <Button
                    variant="icon-circle-secondary"
                    className="bg-color-gray-lighter hover-bg-color-gray-light circle p_5 ml1 md:ml1_5"
                    onClick={f => f}
                  >
                    <Icon
                      icon="Heart"
                      fill={get(brandContext, 'colors.gray')}
                    />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default LocationInfoCard;
