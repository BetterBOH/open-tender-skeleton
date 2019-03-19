import React, { Fragment } from 'react';
import cx from 'classnames';
import { Icon } from 'components';

const TextField = React.memo(
  ({ type, value, onChange, variant, className, placeholder, iconLeft }) => (
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
      />
    </Fragment>
  )
);

export default TextField;
