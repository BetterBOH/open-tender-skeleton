import React from 'react';
import get from 'utils/get';
import { Button, Icon } from 'components';

const ConfirmButtons = React.memo(
  ({
    confirmButtonClasses,
    disabledConfirmButtonClasses,
    confirmButtonIsDisabled,
    confirmButtonText,
    handleConfirm,
    cancelButtonClasses,
    cancelButtonIconColor,
    cancelButtonIcon,
    handleCancel,
    confirmRef,
    cancelRef,
    brandContext
  }) => (
    <div className="ConfirmButtons col-12 flex justify-center px1">
      <Button
        isDisabled={confirmButtonIsDisabled}
        enabledClassName={confirmButtonClasses}
        disabledClassName={disabledConfirmButtonClasses}
        className="col-10 md:col-11"
        variant="primary"
        text={confirmButtonText}
        onClick={!confirmButtonIsDisabled ? handleConfirm : f => f}
        elemRef={confirmRef}
      />
      <Button
        variant="icon-circle-primary"
        className={`col-2 md:col-1 ml_5 ${cancelButtonClasses}`}
        onClick={handleCancel}
        elemRef={cancelRef}
      >
        <Icon
          fill={get(brandContext, `colors[${cancelButtonIconColor}]`)}
          icon={cancelButtonIcon}
        />
      </Button>
    </div>
  )
);

export default ConfirmButtons;
