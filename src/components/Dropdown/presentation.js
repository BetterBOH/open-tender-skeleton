import React from 'react';
import cx from 'classnames';

import { Card, Button } from 'components';

const Dropdown = React.memo(({ actions, children, dropdowns, dropdownId }) => {
  if (!dropdowns.includes(dropdownId)) return null;

  return (
    <div className={cx('Dropdown z2')}>
      <Card className="Dropdown__inner flex justify-center items-center">
        {children}
        <Button onClick={actions.closeDropdown(dropdownId)}>Reset</Button>
      </Card>
    </div>
  );
});

export default Dropdown;
