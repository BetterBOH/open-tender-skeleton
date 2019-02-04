import React, { PureComponent } from 'react';
import cx from 'classnames';

import Colors from 'constants/Colors';
import { Card, Image, Button, Text, Icon, LinkButton } from 'components';

class LocationCard extends PureComponent {
  state = {
    hoursDropdownIsOpen: false
  };

  openHoursDropdown = () => this.setState({ hoursDropdownIsOpen: true });
  closeHoursDropdown = () => this.setState({ hoursDropdownIsOpen: false });

  render() {
    const {
      name,
      distance,
      image,
      streetAddress,
      phoneNumber,
      hours,
      isClosed
    } = this.props;

    const { hoursDropdownIsOpen } = this.state;

    return (
      <div className="LocationCard">
        <Card>
          <div className="LocationCard__image-wrapper w100">
            <Image src={image} isBg={true} />
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
              iconLeftFill={Colors.OFF_WHITE}
              iconRight="Details"
              iconRightFill={Colors.OFF_WHITE}
              variant="small"
            >
              <Text size="detail" className="color-light-gray w100">
                <span className="w100 h100 nowrap overflow-hidden text-overflow-ellipsis inline-block">
                  {streetAddress}
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
                <a href={`tel:${phoneNumber}`} title={`Call ${name} location`}>
                  {phoneNumber}
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
                {!isClosed ? 'Open Now: 11AM to 11PM Today' : 'Closed Now'}
              </Text>
            </LinkButton>
            {hoursDropdownIsOpen ? (
              <div className="LocationCard__hours-dropdown">
                {Object.entries(hours).map(([day, time]) => (
                  <div className="my1 pl2">
                    <Text size="detail" className="color-light-gray">
                      {this.props.Language.t(`global.weekdays.${day}`)} {time}
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
                <Icon fill={Colors.WHITE} icon="Bag" />
              </div>
              <Text
                size="detail"
                className="text-bold color-white uppercase letter-spacing-sm"
              >
                Order Here
              </Text>
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default LocationCard;
