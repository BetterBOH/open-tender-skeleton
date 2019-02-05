import React from 'react';
import cx from 'classnames';

import { Text, Button, Icon } from 'components';

const AccountButton = ({ className, icon, onClick, userIsAuthenticated }) => (
  <Button
    onClick={onClick}
    className={cx(
      'AccountButton bg-color-light-gray radius-md px_5',
      className
    )}
  >
    <div className="flex items-center">
      <div className="AccountButton__icon mr_5">
        {/* TODO: Add user avatar logic */}
        <Icon icon={icon} fill="black" />
      </div>
      <Text size="detail">{userIsAuthenticated ? 'Hugh' : 'Guest'}</Text>
    </div>
  </Button>
);

export default AccountButton;
