import React from 'react';
import cx from 'classnames';
import { Text, Icon, Button, Dropdown } from 'components';

const DetailItemRowWithDropdown = React.memo(
  ({
    label,
    icon,
    value,
    dropdownIsActive,
    openDropdown,
    closeDropdown,
    children
  }) => {
    if (!value) return null;

    const onClick = dropdownIsActive ? closeDropdown : openDropdown;

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
            className="flex items-center bg-color-gray-light radius-sm p_5"
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
            <Dropdown
              dropdownIsActive={dropdownIsActive}
              onClose={closeDropdown}
            >
              {children}
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
);

export default DetailItemRowWithDropdown;
