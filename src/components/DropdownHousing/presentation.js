import React, { Component } from 'react';

import { Card } from 'components';

import DropdownHousingTypes from 'constants/DropdownHousingTypes';

class DropdownHousing extends Component {
  renderDropdownHousingInner = () => {
    const { variant } = this.props;

    switch (variant) {
      case DropdownHousingTypes.MENU_NAVIGATION:
        // TO-DO: Add MenuNavigationDropdown Component
        return null;
      case DropdownHousingTypes.CHOOSE_PAYMENT:
        // TO-DO: Add ChoosePaymentDropdown Component
        return null;
      default:
        return (
          <Card className="m1">
            <Text>hi</Text>
          </Card>
        );
    }
  };

  render() {
    const { dropdownHousingIsActive } = this.props;
    if (!dropdownHousingIsActive) return null;

    return (
      <div className="DropdownHousing fixed t0 r0 b0 l0 flex justify-center items-center z2">
        <div className="DropdownHousing__inner">
          {this.renderDropdownHousingInner()}
        </div>
      </div>
    );
  }
}

export default DropdownHousing;
