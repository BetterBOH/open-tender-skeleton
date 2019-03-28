import React from 'react';
import cx from 'classnames';

import { Button, RadioInput } from 'components';

const RadioSelectButton = React.memo(
  ({ className, id, name, children, isSelected, onClick }) => (
    <Button
      onClick={onClick}
      variant="no-style"
      className={cx(
        'RadioSelectButton col-12 flex justify-between items-center shadow-sm radius-md p1',
        className,
        { 'border-color-gray-dark': isSelected }
      )}
    >
      {children}
      <RadioInput id={id} name={name} checked={isSelected} />
    </Button>
  )
);

export default RadioSelectButton;
