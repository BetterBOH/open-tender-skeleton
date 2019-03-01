import React from 'react';
import cx from 'classnames';

const TextArea = React.memo(
  ({ name, className, rows, onChange, value, placeholder }) => (
    <textarea
      name={name}
      className={cx(
        'Text--size-description resize-none border-color-white color-gray-dark m1',
        className
      )}
      rows={rows}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
);

export default TextArea;
