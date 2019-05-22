import React from 'react';
import cx from 'classnames';

const RadioInput = React.memo(({ className, id, name, checked, onChange }) => (
  <div className={cx('RadioInput relative', className)}>
    <input
      className="RadioInput__input absolute p0 overflow-hidden"
      type="radio"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      tabIndex={-1}
      readOnly
    />
    <label
      className={cx(
        'RadioInput__custom-input absolute circle bg-color-white border-color-gray-dark flex justify-center items-center w100 h100 pointer',
        { 'RadioInput__custom-input--checked': checked }
      )}
      htmlFor={id}
    />
  </div>
));

export default RadioInput;
