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
  handleCancel: PropTypes.func
};

ConfirmButtons.defaultProps = {
  confirmButtonColor: 'black',
  disabledConfirmButtonColor: 'gray-dark',
  confirmButtonIsDisabled: false,
  confirmButtonText: 'Continue',
  handleConfirm: f => f,
  cancelButtonColor: 'gray',
  cancelButtonIconColor: 'white',
  cancelButtonIcon: 'Close',
  handleCancel: f => f
};

export default ConfirmButtons;