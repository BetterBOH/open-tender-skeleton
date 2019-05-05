import React from 'react';
import cx from 'classnames';

const Checkbox = React.memo(({ className, isChecked, onClick }) => {
  return (
    <input
      className={className}
      type="checkbox"
      checked={isChecked}
      onClick={onClick}
    />
  );
});

export default Checkbox;
