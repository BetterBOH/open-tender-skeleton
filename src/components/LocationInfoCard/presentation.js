import React, { PureComponent } from 'react';
import cx from 'classnames';

import Days from 'constants/Days';
import Colors from 'constants/Colors';
import CLOSED from 'constants/Closed';
import getTimeFromMilitaryTime from 'utils/getTimeFromMilitaryTime';

import { Card, Button, Text, Icon, LinkButton } from 'components';

class LocationInfoCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const { location } = this.props;

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
              iconLeftFill={Colors.OFF_WHITE}
              iconRight="Details"
              iconRightFill={Colors.OFF_WHITE}
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
              iconLeftFill={Colors.OFF_WHITE}
              iconRight="Details"
              iconRightFill={Colors.OFF_WHITE}
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
              iconLeftFill={Colors.OFF_WHITE}
              iconRight={hoursDropdownIsOpen ? 'Dropdown' : 'Dropup'}
              iconRightFill={Colors.OFF_WHITE}
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
                {!is_closed ? 'Open Now: 11AM to 11PM Today' : 'Closed Now'}
              </Text>
            </LinkButton>
            {hoursDropdownIsOpen ? (
              <div className="LocationCard__hours-dropdown">
                {Object.entries(hours).map(([day, hours]) => (
                  <div className="my1 pl2">
                    <Text size="detail" className="color-light-gray">
                      {this.props.Language.t(
                        `global.weekdays.${day.toLowerCase()}`
                      )}
                      {` `}
                      {hours.open}
                      {` `}
                      {this.props.Language.t('global.to')}
                      {` `}
                      {hours.close}
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
                  <Icon fill={Colors.WHITE} icon="Repeat" />
                </div>
                <Text
                  size="extrasmall"
                  className="text-extrabold color-white uppercase letter-spacing-sm"
                >
                  Change Location
                </Text>
              </Button>
              <div>
                <Button
                  variant="secondary-round"
                  className="bg-color-gray-light circle p_5"
                  onClick={f => f}
                >
                  <div className="center">
                    <Icon fill={Colors.WHITE} icon="Share" />
                  </div>
                </Button>
                <Button
                  variant="secondary-round"
                  className="bg-color-gray-light circle p_5 ml1 md:ml1_5"
                  onClick={f => f}
                >
                  <div className="center">
                    <Icon fill={Colors.WHITE} icon="Heart" />
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
