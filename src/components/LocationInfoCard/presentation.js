import React, { PureComponent } from 'react';
import cx from 'classnames';

import Days from 'constants/Days';
import CLOSED from 'constants/Closed';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';

import { Card, Button, Text, Icon, LinkButton } from 'components';

import get from 'utils/get';
import { defaultConfig } from 'config';

const grayLight = get(defaultConfig, "brand.colors['gray-light']");
const grayDark = get(defaultConfig, "brand.colors['gray-dark']");

class LocationInfoCard extends PureComponent {
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
      <div className="LocationInfoCard">
        <Card>
          <div className="LocationInfoCard__info w100 my_5 p1 md:px2">
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
                      ${hours.open} ${Language.t('global.to')} ${hours.close}`}
                    </Text>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="flex justify-between mt2 mx1 md:mx0">
              <Button
                variant="secondary"
                onClick={f => f}
                className="bg-color-gray-light flex items-center px1 py_5"
              >
                <div className="LocationInfoCard__button-icon mr_5">
                  <Icon fill={grayDark} icon="Repeat" />
                </div>
                <Text
                  size="extrasmall"
                  className="text-extrabold color-gray-dark uppercase letter-spacing-sm"
                >
                  {Language.t('location.changeLocation')}
                </Text>
              </Button>
              <div>
                <Button
                  variant="secondary-round"
                  className="bg-color-gray-light circle p_5"
                  onClick={f => f}
                >
                  <div className="center">
                    <Icon fill={grayDark} icon="Share" />
                  </div>
                </Button>
                <Button
                  variant="secondary-round"
                  className="bg-color-gray-light circle p_5 ml1 md:ml1_5"
                  onClick={f => f}
                >
                  <div className="center">
                    <Icon fill={grayDark} icon="Heart" />
                  </div>
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
