import React, { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class MiniCart extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func
  };

  static defaultProps = {
    handleClose: f => f
  };

  render() {
    const { handleClose } = this.props;

    return RegistryLoader({ handleClose }, 'components.MiniCart', () =>
      import('./presentation.js')
    );
  }
}

export default MiniCart;
