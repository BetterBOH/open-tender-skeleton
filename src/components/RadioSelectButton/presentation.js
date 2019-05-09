import React from 'react';
import cx from 'classnames';

import { Button, RadioInput } from 'components';
import { LIST, STANDALONE } from 'constants/RadioSelectButtonVariants';

const RadioSelectButton = React.memo(
  ({ className, variant, id, name, children, isSelected, onClick }) => {
    const isStandAlone = variant === STANDALONE;
    const isList = variant === LIST;

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
        <RadioInput id={id} name={name} checked={isSelected} />
      </Button>
    );
  }
);

export default RadioSelectButton;
