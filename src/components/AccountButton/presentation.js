import React from 'react';
import cx from 'classnames';

import { Text, Button } from 'components';

const AccountButton = ({ className, icon, onClick, userIsAuthenticated }) => (
  <Button
    onClick={onClick}
    className={cx('AccountButton bg-color-light-gray radius-md', className)}
  >
    <div className="col-10 px_5">
      <Text size="detail">{userIsAuthenticated ? 'Hugh' : 'Guest'}</Text>
    </div>
  </Button>
);

export default AccountButton;
