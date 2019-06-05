import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

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
    brandContext,
    confirmRef,
    cancelRef
  }) =>
    RegistryLoader(
      {
        confirmButtonClasses,
        disabledConfirmButtonClasses,
        confirmButtonIsDisabled,
        confirmButtonText,
        handleConfirm,
        cancelButtonClasses,
        cancelButtonIconColor,
        cancelButtonIcon,
        handleCancel,
        brandContext,
        confirmRef,
        cancelRef
      },
      'components.ConfirmButtons',
      () => import('./presentation.js')
    )
);

ConfirmButtons.propTypes = {
  confirmButtonClasses: PropTypes.string,
  disabledConfirmButtonClasses: PropTypes.string,
  confirmButtonIsDisabled: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  handleConfirm: PropTypes.func,
  cancelButtonClasses: PropTypes.string,
  cancelButtonIcon: PropTypes.string,
  handleCancel: PropTypes.func,
  confirmRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  cancelRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

ConfirmButtons.defaultProps = {
  confirmButtonClasses: 'bg-color-gray-dark hover-bg-color-black color-white',
  disabledConfirmButtonClasses: 'bg-color-gray-light color-gray',
  confirmButtonIsDisabled: false,
  confirmButtonText: 'Continue',
  handleConfirm: f => f,
  cancelButtonClasses: 'bg-color-gray-light hover-bg-color-gray',
  cancelButtonIconColor: 'white',
  cancelButtonIcon: 'Close',
  handleCancel: f => f,
  confirmRef: null,
  cancelRef: null
};

export default ConfirmButtons;
