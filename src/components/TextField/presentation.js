import React, { Fragment } from 'react';
import cx from 'classnames';
import { Icon } from 'components';

const TextField = React.memo(
  ({
    type,
    value,
    variant,
    className,
    placeholder,
    iconLeft,
    isDisabled,
    onChange
  }) => (
    <Fragment>
      {!!iconLeft && (
        <Icon
          icon={iconLeft}
          className="TextField__icon mr_5 color-gray-dark"
        />
      )}
      <input
        className={cx('TextField p_5 w100', `TextField--${variant}`, className)}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </Fragment>
  )
);

export default TextField;
