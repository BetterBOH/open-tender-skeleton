import React from 'react';
import cx from 'classnames';

const TextField = React.memo(
  ({ type, value, onChange, variant, className, placeholder }) => (
    // TO-DO: Add presentation styles
    <input
      className={cx('TextField px1', `TextField--${variant}`, className)}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
);

export default TextField;
