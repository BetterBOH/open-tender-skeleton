import React from 'react';
import cx from 'classnames';

import { Card, Button, Text } from 'components';

const DropdownHousing = React.memo(
  ({ actions, children, dropdownHousingIsActive = false }) => {
    return (
      <div
        className={cx('DropdownHousing absolute t0 l0 z2', {
          'events-none': !dropdownHousingIsActive,
          'events-all': dropdownHousingIsActive
        })}
      >
        <Card className="DropdownHousing__inner flex justify-center items-center">
          <Text className="m1">DropdownHousing</Text>
          {children}
          <Button onClick={actions.closeDropdownHousing}>Reset</Button>
        </Card>
      </div>
    );
  }
);

export default DropdownHousing;
