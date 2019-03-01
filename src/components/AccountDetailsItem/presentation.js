import React from 'react';
import get from 'utils/get';
import { Text, Icon } from 'components';

const AccountDetailsItem = React.memo(props => {
  const { label, icon, value } = props;

  return (
    <div className="AccountDetailsItem__row flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold color-gray-dark letter-spacing-md uppercase"
      >
        {label}
      </Text>
      <div className="flex bg-color-gray-light radius-sm p_5">
        <div className="AccountDetailsItem__icon mr_5">
          <Icon icon={icon} fill="gray" />
        </div>
        <Text size="extrasmall" className="color-gray-dark">
          {value}
        </Text>
        <div className="AccountDetailsItem__icon mr_5">
          <Icon icon={'Dropdown'} fill="gray" />
        </div>
      </div>
    </div>
  );
});

export default AccountDetailsItem;
