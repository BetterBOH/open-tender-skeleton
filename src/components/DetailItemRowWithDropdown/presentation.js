import React from 'react';
import { Text, Icon, Button, Dropdown } from 'components';
import get from 'utils/get';

const DetailItemRowWithDropdown = React.memo(
  ({
    label,
    icon,
    value,
    onClick,
    dropdownIsActive,
    closeDropdown,
    children,
    brandContext
  }) => {
    if (!value && !children) return null;

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
              <Icon
                icon={icon}
                className="flex"
                fill={get(brandContext, 'colors.gray')}
                variant="small"
              />
            </div>
            {!!value && (
              <Text size="extrasmall" className="color-black">
                {value}
              </Text>
            )}
            <div className="DetailItemRowWithDropdown__dropdown-icon ml_5">
              <Icon
                icon="Dropdown"
                className="flex"
                fill={get(brandContext, 'colors.gray')}
              />
            </div>
          </Button>
          {!!children && (
            <div className="DetailItemRowWithDropdown__dropdown absolute l0">
              <Dropdown
                dropdownIsActive={dropdownIsActive}
                onClose={closeDropdown}
              >
                {children}
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default DetailItemRowWithDropdown;
