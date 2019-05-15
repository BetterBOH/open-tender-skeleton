import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const ConfirmButtons = React.memo(props =>
  RegistryLoader(props, 'components.ConfirmButtons', () =>
    import('./presentation.js')
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
  confirmRef: PropTypes.object,
  cancelRef: PropTypes.object
};

ConfirmButtons.defaultProps = {
  confirmButtonClasses: 'bg-color-gray-dark color-white',
  disabledConfirmButtonClasses: 'bg-color-gray-light color-gray',
  confirmButtonIsDisabled: false,
  confirmButtonText: 'Continue',
  handleConfirm: f => f,
  cancelButtonClasses: 'bg-color-gray-light',
  cancelButtonIconColor: 'white',
  cancelButtonIcon: 'Close',
  handleCancel: f => f,
  confirmRef: null,
  cancelRef: null
};

export default ConfirmButtons;
