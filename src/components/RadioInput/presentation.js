import React from 'react';
import cx from 'classnames';

const RadioInput = React.memo(({ className, name, checked }) => (
  <div className={cx('RadioInput', className)}>
    <input
      className={cx(
        'absolute circle border-color-gray-dark flex justify-center items-center w100 h100',
        { 'RadioInput--checked': checked }
      )}
      type="radio"
      name={name}
      aria-label={name}
      checked={checked}
      readOnly
    />
  </div>
));

export default RadioInput;
