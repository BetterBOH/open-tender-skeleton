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
          size="extra-small"
          className="text-bold color-gray-dark letter-spacing-sm uppercase"
        >
          {label}
        </Text>
        <div className="relative">
          <Button
            className="flex items-center bg-color-gray-lighter radius-sm p_5"
            onClick={onClick}
          >
            <div className="DetailItemRowWithDropdown__icon mr_5">
              <Icon
                icon={icon}
                fill={get(brandContext, 'colors[gray-light]')}
                variant="small"
              />
            </div>
            {!!value && (
              <Text size="extra-small" className="color-black">
                {value}
              </Text>
            )}
            <div className="DetailItemRowWithDropdown__dropdown-icon ml_5">
              <Icon icon="Dropdown" fill={get(brandContext, 'colors.gray')} />
            </div>
          </Button>
          {!!children && (
            <div className="DetailItemRowWithDropdown__dropdown absolute r0">
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
