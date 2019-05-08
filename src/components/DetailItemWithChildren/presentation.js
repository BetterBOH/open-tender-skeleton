import React from 'react';
import cx from 'classnames';
import { Text, Icon, Button } from 'components';
import get from 'utils/get';

const DetailItemRowWithChildren = React.memo(
  ({
    label,
    hasError,
    icon,
    value,
    isOpen,
    open,
    close,
    children,
    brandContext
  }) => {
    if (!value && !children) return null;

    return (
      <div className="DetailItemRowWithChildren py1 pl1 pr_5">
        <div className="flex justify-between items-center">
          <Text
            size="extrasmall"
            className="text-bold color-gray-dark letter-spacing-sm uppercase"
          >
            {label}
          </Text>
          <div className="relative">
            <Button
              className="flex items-center bg-color-gray-light radius-sm p_5"
              onClick={isOpen ? close : open}
            >
              <div className="DetailItemRowWithChildren__icon mr_5">
                <Icon
                  icon={hasError ? 'Error' : icon}
                  fill={
                    hasError
                      ? get(brandContext, 'colors.error')
                      : get(brandContext, 'colors.gray')
                  }
                />
              </div>
              {!!value && (
                <Text
                  size="extrasmall"
                  className={hasError ? 'color-error' : 'color-black'}
                >
                  {value}
                </Text>
              )}
            </Button>
          </div>
        </div>
        {!!children && (
          <div
            className={cx(
              'DetailItemRowWithChildren__children-wrapper overflow-hidden',
              {
                'DetailItemRowWithChildren__children-wrapper--opened overflow-auto': isOpen
              }
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

export default DetailItemRowWithChildren;
