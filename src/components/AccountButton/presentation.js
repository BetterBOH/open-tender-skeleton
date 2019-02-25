import React from 'react';
import cx from 'classnames';
import get from 'utils/get';

import { Text, Button, Icon } from 'components';

const AccountButton = React.memo(props => {
  const {
    className,
    icon,
    onClick,
    customer,
    userIsAuthenticated,
    localesContext
  } = props;

  const { Language } = localesContext;

  return (
    <Button
      onClick={onClick}
      className={cx(
        'AccountButton bg-color-gray-light radius-md px_5',
        className
      )}
      to={userIsAuthenticated ? '/dashboard' : '/auth'}
    >
      <div className="flex items-center">
        <div className="AccountButton__icon mr_5">
          {/* TODO: Add user avatar logic */}
          <Icon icon={icon} fill="black" />
        </div>
        <Text size="detail">
          {userIsAuthenticated
            ? get(customer, 'first_name')
            : Language.t('account.guest')}
        </Text>
      </div>
    </Button>
  );
});

export default AccountButton;
