import React from 'react';
import cx from 'classnames';

import { Button, RadioInput } from 'components';

const RadioSelectButton = React.memo(
  ({ className, id, variant, name, children, isSelected, onClick }) => {
    const isStandAlone = variant === 'standalone';
    const isList = variant === 'list';

    return (
      <Button
        onClick={onClick}
        variant="no-style"
        className={cx(
          'RadioSelectButton col-12 flex justify-between items-center py1',
          {
            'RadioSelectButton--standalone shadow-sm radius-md px1': isStandAlone,
            'border-color-gray-dark': isStandAlone && isSelected,
            'RadioSelectButton--list': isList
          },
          className
        )}
      >
        {children}
        <RadioInput
          className={cx({ mr2: isList })}
          id={id}
          name={name}
          checked={isSelected}
        />
      </Button>
    );
  }
);

export default RadioSelectButton;
