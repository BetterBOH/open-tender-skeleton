import React from 'react';
import get from 'utils/get';
import { Button, Icon } from 'components';

const ConfirmButtons = React.memo(props => {
  const {
    confirmButtonColor,
    disabledConfirmButtonColor,
    confirmButtonIsDisabled,
    confirmButtonText,
    handleConfirm,
    cancelButtonColor,
    cancelButtonIconColor,
    cancelButtonIcon,
    handleCancel,
    brandContext,
    confirmRef,
    cancelRef
  } = props;

  return (
    <div className="col-12 flex justify-center px1">
      <Button
        isDisabled={confirmButtonIsDisabled}
        disabledClassName={`disabled bg-color-${disabledConfirmButtonColor}`}
        className={`col-10 md:col-11 bg-color-${confirmButtonColor}`}
        variant="primary"
        text={confirmButtonText}
        onClick={handleConfirm}
        elemRef={confirmRef}
      />
      {handleCancel && (
        <Button
          variant="icon-circle-primary"
          className={`col-2 md:col-1 bg-color-${cancelButtonColor} ml_5`}
          onClick={handleCancel}
          cancelRef={cancelRef}
        >
          <Icon
            fill={get(brandContext, `colors[${cancelButtonIconColor}]`)}
            icon={cancelButtonIcon}
          />
        </Button>
      )}
    </div>
  );
});

export default ConfirmButtons;
