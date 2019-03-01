import React from 'react';
import cx from 'classnames';

const TextArea = React.memo(
  ({ name, className, rows, onChange, value, placeholder }) => (
    <textarea
      name={name}
      className={cx('resize-none', className)}
      rows={rows}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
);

export default TextArea;
