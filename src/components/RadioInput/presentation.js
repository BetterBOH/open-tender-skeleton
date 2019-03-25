import React from 'react';
import cx from 'classnames';

const RadioInput = React.memo(({ className, name, checked }) => (
  <div className="RadioInput__container relative">
    <input
      className="RadioInput__input absolute p0 overflow-hidden"
      type="radio"
      name={name}
      aria-label={name}
      checked={checked}
      tabIndex={-1}
      readOnly
    />
    <span
      className={cx(
        'RadioInput__customInput absolute circle bg-color-white border-color-gray-dark flex justify-center items-center w100 h100',
        { 'RadioInput__customInput--checked': checked },
        className
      )}
    />
  </div>
));

export default RadioInput;
