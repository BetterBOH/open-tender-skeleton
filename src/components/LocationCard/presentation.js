import React, { PureComponent } from 'react';
import cx from 'classnames';

import Days from 'constants/Days';
import CLOSED from 'constants/Closed';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';
import get from 'utils/get';
import buildQueryString from 'utils/buildQueryString';

import { Card, Image, Button, Text, Icon, LinkButton } from 'components';

class LocationCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const { location, onOrderClick, localesContext, brandContext } = this.props;

    const {
      name,
      distance,
      street_address,
      city,
      state_code,
      zip_code,
      phone_number,
      large_image_url,
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

    const today = Days[new Date().getDay()];

    const query = buildQueryString([
      street_address,
      city,
      state_code,
      zip_code
    ]);

    return (
      <Card
        className="LocationCard bg-color-white shadow-md"
        variant="location-card"
      >
        <div className="LocationCard__image-wrapper">
          <Image src={large_image_url} isBg={true} isHero={true} />
        </div>
        <div className="LocationCard__info text-left my_5 p1">
          <div className="mb1">
            <Text size="cta" className="text-bold block">
              {name}
            </Text>
            {!!distance && (
              <Text
                size="detail"
                className="block color-gray-dark text-semibold"
              >
                {`${distance.toFixed(2)} ${Language.t(
                  'locations.distanceUnit'
                )}`}
              </Text>
            )}
          </div>
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
            ariaLabel={`Search for ${name} location in Google Maps`}
            anchorTitle={`Search for ${name} location in Google Maps`}
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
          <Button
            variant="secondary"
            onClick={onOrderClick}
            className="bg-color-gray-dark hover-bg-color-black flex items-center px1_5 py_5 mt2"
          >
            <Icon
              variant="small"
              className="mr_5"
              icon="Bag"
              fill={get(brandContext, 'colors.white')}
            />

            <Text
              size="extra-small"
              className="text-extra-bold color-white uppercase letter-spacing-md"
            >
              {Language.t('location.orderHere')}
            </Text>
          </Button>
        </div>
      </Card>
    );
  }
}

export default LocationCard;
