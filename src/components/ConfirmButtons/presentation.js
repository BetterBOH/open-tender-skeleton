import React from 'react';
import cx from 'classnames';
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
    handleCancel
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
      />
      <Button
        variant="primary-round"
        className={`col-2 md:col-1 bg-color-${cancelButtonColor} ml_5`}
        onClick={handleCancel}
      >
        <div
          className={cx(
            'Button--primary-round--icon',
            cancelButtonIcon === 'Back' ? 'ml1_25' : 'mxauto'
          )}
        >
          <Icon fill={cancelButtonIconColor} icon={cancelButtonIcon} />
        </div>
      </Button>
    </div>
  );
});

export default ConfirmButtons;
