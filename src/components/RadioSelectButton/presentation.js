import React, { Fragment } from 'react';
import cx from 'classnames';

import { Text, Button, RadioInput } from 'components';

const RadioSelectButton = React.memo(
  ({
    className,
    text,
    labelBold,
    labelRegular,
    children,
    isSelected,
    onClick
  }) => {
    return (
      <Button
        onClick={onClick}
        variant="no-style"
        className={cx(
          'RadioSelectButton flex flex-wrap justify-between items-center col-12 shadow-sm radius-md p1',
          className,
          { 'border-color-gray-dark': isSelected }
        )}
      >
        <div className="flex items-center">
          {!!children ? (
            <Fragment>{children}</Fragment>
          ) : (
            <Fragment>
              {!!text && (
                <div className="RadioSelectButton__bubble color-black radius-lg text-bold flex justify-center items-center col-1 mr1">
                  <Text size="small">{text.charAt(0)}</Text>
                </div>
              )}
            </Fragment>
          )}
          <div className="RadioSelectButton__text color-gray-dark">
            {(!!labelBold || !!labelRegular) && (
              <div className="RadioSelectButton__labels flex color-black uppercase letter-spacing-xs">
                <Text size="label-detail" className="text-bold mr1">
                  {labelBold}
                </Text>
                <Text size="label-detail">{labelRegular}</Text>
              </div>
            )}
            <Text size="description">{text}</Text>
          </div>
        </div>
        <RadioInput name={text} checked={isSelected} />
      </Button>
    );
  }
);

export default RadioSelectButton;
