import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const ConfirmButtons = React.memo(props =>
  RegistryLoader(props, 'components.ConfirmButtons', () =>
    import('./presentation.js')
  )
);

ConfirmButtons.propTypes = {
  confirmButtonColor: PropTypes.string,
  disabledConfirmButtonColor: PropTypes.string,
  confirmButtonIsDisabled: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  handleConfirm: PropTypes.func,
  cancelButtonColor: PropTypes.string,
  cancelButtonIconColor: PropTypes.string,
  cancelButtonIcon: PropTypes.string,
  handleCancel: PropTypes.func,
  confirmRef: PropTypes.object,
  cancelRef: PropTypes.object
};

ConfirmButtons.defaultProps = {
  confirmButtonColor: 'gray-dark',
  disabledConfirmButtonColor: 'gray',
  confirmButtonIsDisabled: false,
  confirmButtonText: 'Continue',
  handleConfirm: f => f,
  cancelButtonColor: 'gray-light',
  cancelButtonIconColor: 'white',
  cancelButtonIcon: 'Close',
  handleCancel: f => f,
  confirmRef: null,
  cancelRef: null
};

export default ConfirmButtons;
