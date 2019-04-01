import React, { Fragment } from 'react';
import cx from 'classnames';
import { Text, Icon } from 'components';

const TextField = React.memo(
  ({
    type,
    autoComplete,
    value,
    variant,
    className,
    placeholder,
    label,
    iconLeft,
    isDisabled,
    onBlur,
    onChange
  }) => (
    <Fragment>
      {!!label && (
        <div className="w100 text-left">
          <Text
            size="extrasmall"
            className="text-bold color-gray-dark letter-spacing-sm uppercase"
          >
            {label}
          </Text>
        </div>
      )}
      <div className="w100 flex justify-center items-center">
        {!!iconLeft && (
          <Icon
            icon={iconLeft}
            className="TextField__icon mr_5 color-gray-dark"
          />
        )}
        <input
          className={cx(
            'TextField p_5 w100',
            `TextField--${variant}`,
            className
          )}
          type={type}
          autoComplete={autoComplete}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
    </Fragment>
  )
);

export default TextField;
