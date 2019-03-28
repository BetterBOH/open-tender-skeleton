import React from 'react';
import cx from 'classnames';

import { Button, RadioInput } from 'components';

const RadioSelectButton = React.memo(
  ({ className, id, variant, name, children, isSelected, onClick }) => (
    <Button
      onClick={onClick}
      variant="no-style"
      className={cx(
        'RadioSelectButton col-12 flex justify-between items-center py1',
        {
          'RadioSelectButton--standalone shadow-sm radius-md px1':
            variant === 'standalone',
          'border-color-gray-dark': variant === 'standalone' && isSelected,
          'RadioSelectButton--list': variant === 'list'
        },
        className
      )}
    >
      {children}
      <RadioInput
        className={cx({ mr2: variant === 'list' })}
        id={id}
        name={name}
        checked={isSelected}
      />
    </Button>
  )
);

export default RadioSelectButton;
