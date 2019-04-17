import React from 'react';
import { Text, Icon, Button, Dropdown } from 'components';
import get from 'utils/get';

const DetailItemRowWithDropdown = React.memo(
  ({
    label,
    icon,
    value,
    dropdownIsActive,
    openDropdown,
    closeDropdown,
    children,
    brandContext
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
              <Icon icon={icon} fill={get(brandContext, 'colors.gray')} />
            </div>
            <Text size="extrasmall" className="color-black">
              {value}
            </Text>
            <div className="DetailItemRowWithDropdown__icon">
              <Icon icon="Dropdown" fill={get(brandContext, 'colors.gray')} />
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
