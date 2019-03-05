import React from 'react';
import { Text, Icon } from 'components';

const DetailItemRowWithDropdown = React.memo(props => {
  const { label, icon, value } = props;

  return (
    <div className="DetailItemRowWithDropdown flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold color-gray-dark letter-spacing-md uppercase"
      >
        {label}
      </Text>
      <div className="flex items-center bg-color-gray-light radius-sm p_5">
        <div className="DetailItemRowWithDropdown__icon mr_5">
          <Icon icon={icon} fill="gray" />
        </div>
        <Text size="extrasmall" className="color-black">
          {value}
        </Text>
        <div className="DetailItemRowWithDropdown__icon">
          <Icon icon="Dropdown" fill="gray" />
        </div>
      </div>
    </div>
  );
});

export default DetailItemRowWithDropdown;
