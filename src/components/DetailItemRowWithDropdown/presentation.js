import React from 'react';
import cx from 'classnames';
import { Text, Icon, Button, Dropdown } from 'components';

const DetailItemRowWithDropdown = React.memo(props => {
  const { label, icon, value, onClick, dropdownId } = props;

  if (!value) return null;

  return (
    <div className="DetailItemRowWithDropdown flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold color-gray-dark letter-spacing-sm uppercase"
      >
        {label}
      </Text>
      <div className="relative">
        <Button
          className={cx('flex items-center bg-color-gray-light radius-sm p_5', {
            disabled: !onClick
          })}
          onClick={onClick}
        >
          <div className="DetailItemRowWithDropdown__icon mr_5">
            <Icon icon={icon} fill="gray" />
          </div>
          <Text size="extrasmall" className="color-black">
            {value}
          </Text>
          <div className="DetailItemRowWithDropdown__icon">
            <Icon icon="Dropdown" fill="gray" />
          </div>
        </Button>
        <div className="DetailItemRowWithDropdown__dropdown absolute l0">
          <Dropdown dropdownId={dropdownId} />
        </div>
      </div>
    </div>
  );
});

export default DetailItemRowWithDropdown;
