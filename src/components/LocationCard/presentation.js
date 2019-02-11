import React, { PureComponent } from 'react';
import cx from 'classnames';

import Days from 'constants/Days';
import CLOSED from 'constants/Closed';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';

import { Card, Image, Button, Text, Icon, LinkButton } from 'components';

import get from 'utils/get';
import { defaultConfig } from 'config';

const grayLight = get(defaultConfig, "brand.colors['gray-light']");
const white = get(defaultConfig, 'brand.colors.white');

class LocationCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const { location, Language } = this.props;

    const {
      name,
      distance,
      street_address,
      phone_number,
      large_image_url,
      is_closed,
      hours_pickup
    } = location;

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

    return (
      <div className="LocationCard">
        <Card>
          <div className="LocationCard__image-wrapper w100">
            <Image src={large_image_url} isBg={true} />
          </div>
          <div className="LocationCard__info w100 my_5 p1">
            <div className="mb1">
              <Text size="cta" className="text-bold block">
                {name}
              </Text>
              <Text
                size="detail"
                className="block color-off-white text-semibold"
              >
                {distance}
              </Text>
            </div>
            <LinkButton
              iconLeft="Location"
              iconLeftFill={grayLight}
              iconRight="Details"
              iconRightFill={grayLight}
              variant="small"
            >
              <Text size="detail" className="color-light-gray w100">
                <span className="w100 h100 nowrap overflow-hidden text-overflow-ellipsis inline-block">
                  {street_address}
                </span>
              </Text>
            </LinkButton>
            <LinkButton
              iconLeft="Phone"
              iconLeftFill={grayLight}
              iconRight="Details"
              iconRightFill={grayLight}
              variant="small"
            >
              <Text size="detail" className="color-light-gray">
                <a href={`tel:${phone_number}`} title={`Call ${name} location`}>
                  {phone_number}
                </a>
              </Text>
            </LinkButton>
            <LinkButton
              iconLeft="Clock"
              iconLeftFill={grayLight}
              iconRight={hoursDropdownIsOpen ? 'Dropup' : 'Dropdown'}
              iconRightFill={grayLight}
              className="color-light-gray"
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
                  <div className="my1 pl2">
                    <Text size="detail" className="color-light-gray">
                      {`${Language.t(`global.weekdays.${day.toLowerCase()}`)}
                        ${hours.open} ${Language.t('global.to')} ${
                        hours.close
                      }`}
                    </Text>
                  </div>
                ))}
              </div>
            ) : null}
            <Button
              variant="secondary"
              onClick={f => f}
              className="bg-color-light-gray flex items-center px1 py_5 mt2"
            >
              <div className="LocationCard__order-button-icon mr_5">
                <Icon fill={white} icon="Bag" />
              </div>
              <Text
                size="extrasmall"
                className="text-extrabold color-white uppercase letter-spacing-sm"
              >
                {Language.t('location.orderHere')}
              </Text>
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default LocationCard;
