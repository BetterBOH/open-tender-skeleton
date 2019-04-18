import React, { PureComponent } from 'react';
import cx from 'classnames';

import Days from 'constants/Days';
import CLOSED from 'constants/Closed';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';
import get from 'utils/get';

import { Card, Button, Text, Icon, LinkButton } from 'components';

class LocationInfoCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const { location, localesContext, brandContext } = this.props;

    const {
      name,
      distance,
      street_address,
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
            >
              <Text size="detail" className="color-gray-dark w100">
                <span className="w100 h100 nowrap overflow-hidden text-overflow-ellipsis inline-block">
                  {street_address}
                </span>
              </Text>
            </LinkButton>
            <LinkButton
              iconLeft="Phone"
              iconLeftFill={get(brandContext, 'colors.gray')}
              iconRight="Details"
              iconRightFill={get(brandContext, 'colors.gray')}
              variant="small"
            >
              <Text size="detail">
                <a
                  className="color-gray-dark"
                  href={`tel:${phone_number}`}
                  title={`Call ${name} location`}
                >
                  {phone_number}
                </a>
              </Text>
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
                onClick={f => f}
                className="bg-color-gray-light flex items-center px1 py_5"
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
              <div>
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
