import React, { PureComponent } from 'react';

import { Button, Text, Icon } from 'components';

class MenuNav extends PureComponent {
  render() {
    const { menuCategories } = this.props;

    return (
      <div className="MenuNav p1 bg-color-white flex justify-between items-center">
        <Button className="flex items-center">
          <Text className="color-gray" size="description">
            {menuCategories[0]}
          </Text>
          <div className="MenuNav__icon ml_5">
            <Icon icon="Dropdown" fill="gray" />
          </div>
        </Button>
      </div>
    );
  }
}

export default MenuNav;
