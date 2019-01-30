import React, { PureComponent } from 'react';

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
      address,
      phone,
      hours,
      locationIsOpen
    } = this.props;

    const { hoursDropdownIsOpen } = this.state;

    return (
      <div className="LocationCard">
        <Card>
          <Image src={image} />
          <div className="LocationCard__info my_5 p_5">
            <Text size="headline">{name}</Text>
            <Text size="detail">{distance}</Text>
            <LinkButton iconLeft="Location" iconRight="Details">
              <Text size="detail">
                <address>{address}</address>
              </Text>
            </LinkButton>
            <LinkButton iconLeft="Phone" iconRight="Details">
              <Text size="detail">
                <a href={`tel:${phone}`} title={`Call ${name} location`}>
                  {phone}
                </a>
              </Text>
            </LinkButton>
            <LinkButton
              iconLeft="Clock"
              iconRight={hoursDropdownIsOpen ? 'Dropdown' : 'Dropup'}
              onClick={
                hoursDropdownIsOpen
                  ? this.closeHoursDropdown
                  : this.openHoursDropdown
              }
            >
              <Text size="detail">
                {locationIsOpen ? 'Open Now: 11AM to 11PM Today' : 'Closed Now'}
              </Text>
            </LinkButton>
            {hoursDropdownIsOpen ? (
              <div className="LocationCard__hours-dropdown">
                {Object.entries(hours).map(([day, time]) => (
                  <div>
                    {day}: {time}
                  </div>
                ))}
              </div>
            ) : null}
            <Button onClick={f => f} className="bg-color-black-wash">
              <Icon fill="#fff" icon="Bag" />
              <Text size="detail">Order Here</Text>
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default LocationCard;
