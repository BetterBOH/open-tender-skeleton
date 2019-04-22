import React, { PureComponent } from 'react';
import cx from 'classnames';

import Days from 'constants/Days';
import CLOSED from 'constants/Closed';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';
import get from 'utils/get';
import buildQueryString from 'utils/buildQueryString';
import getRoutes from 'utils/getRoutes';

import { Card, Button, Text, Icon, LinkButton } from 'components';

class LocationInfoCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const { location, className, localesContext, brandContext } = this.props;

    const {
      name,
      distance,
      street_address,
      city,
      state_code,
      zip_code,
      phone_number,
      is_closed,
      hours_pickup
    } = location;

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
            <div className="mb1">
              <Text size="cta" className="text-bold block">
                {name}
              </Text>
              <Text
                size="detail"
                className="block color-gray-dark text-semibold"
              >
                {distance}
              </Text>
            </div>
            <LinkButton
              iconLeft="Location"
              iconLeftFill={get(brandContext, 'colors.gray')}
              iconRight="Details"
              iconRightFill={get(brandContext, 'colors.gray')}
              variant="small"
              to={
                !!query
                  ? `https://www.google.com/maps/search/?api=1&query=${query}`
                  : null
              }
              ariaLabel={`Search for ${name} location in Google Maps`}
              anchorTitle={`Search for ${name} location in Google Maps`}
            >
              <Text
                size="detail"
                className="block color-gray-dark nowrap overflow-hidden text-overflow-ellipsis"
              >
                {street_address}
              </Text>
            </LinkButton>
            <LinkButton
              className="color-gray-dark"
              iconLeft="Phone"
              iconLeftFill={get(brandContext, 'colors.gray')}
              iconRight="Details"
              iconRightFill={get(brandContext, 'colors.gray')}
              variant="small"
              to={`tel:${phone_number}`}
              ariaLabel={`Call ${name} location`}
              anchorTitle={`Call ${name} location`}
            >
              <Text size="detail">{phone_number}</Text>
            </LinkButton>
            <LinkButton
              iconLeft="Clock"
              iconLeftFill={get(brandContext, 'colors.gray')}
              iconRight={hoursDropdownIsOpen ? 'Dropup' : 'Dropdown'}
              iconRightFill={get(brandContext, 'colors.gray')}
              className="color-gray-dark"
              variant="small"
              onClick={
                hoursDropdownIsOpen
                  ? this.closeHoursDropdown
                  : this.openHoursDropdown
              }
            >
              <Text
                size="detail"
                className={cx({ 'color-black': hoursDropdownIsOpen })}
              >
                {!is_closed
                  ? `${Language.t('location.openNow')}: 11AM to 11PM Today`
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
                className="bg-color-gray-light flex items-center px1 py_5"
                to={getRoutes().LOCATIONS}
              >
                <div className="LocationInfoCard__button-icon mr_5">
                  <Icon icon="Repeat" />
                </div>
                <Text
                  size="extrasmall"
                  className="text-extrabold color-gray-dark uppercase letter-spacing-sm"
                >
                  {Language.t('location.changeLocation')}
                </Text>
              </Button>
              {/* TO-DO: Remove 'none' when adding Share and Favorite Menu features */}
              <div className="none">
                <Button
                  variant="icon-circle-secondary"
                  className="bg-color-gray-light circle p_5"
                  onClick={f => f}
                >
                  <Icon icon="Share" />
                </Button>
                <Button
                  variant="icon-circle-secondary"
                  className="bg-color-gray-light circle p_5 ml1 md:ml1_5"
                  onClick={f => f}
                >
                  <Icon icon="Heart" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default LocationInfoCard;
