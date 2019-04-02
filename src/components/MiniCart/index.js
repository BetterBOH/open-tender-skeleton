import React, { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import PropTypes from 'prop-types';

class MiniCart extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func
  };

  static defaultProps = {
    handleClose: f => f
  };

  render() {
    const { handleClose, localesContext } = this.props;

    return RegistryLoader(
      { handleClose, localesContext },
      'components.MiniCart',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(MiniCart);
