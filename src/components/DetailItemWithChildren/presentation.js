import React from 'react';
import cx from 'classnames';
import { Text, Icon, Button } from 'components';

const DetailItemRowWithChildren = React.memo(
  ({ label, icon, value, isExpanded, expand, collapse, children }) => {
    if (!value) return null;

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
              onClick={isExpanded ? collapse : expand}
            >
              <div className="DetailItemRowWithChildren__icon mr_5">
                <Icon icon={icon} fill="gray" />
              </div>
              <Text size="extrasmall" className="color-black">
                {value}
              </Text>
            </Button>
          </div>
        </div>
        <div
          className={cx('DetailItemRowWithChildren__children-wrapper', {
            'DetailItemRowWithChildren__children-wrapper--expanded': isExpanded
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default DetailItemRowWithChildren;
