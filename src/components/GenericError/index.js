import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class GenericError extends Component {
  static propTypes = {
    handleAcceptClick: PropTypes.func
  };

  static defaultProps = {
    handleAcceptClick: f => f
  };

  render() {
    const { localesContext, handleAcceptClick } = this.props;

    return RegistryLoader(
      {
        localesContext,
        handleAccept: handleAcceptClick
      },
      'components.GenericError',
      () => import('./presentation.js')
    );
  }
}

export default GenericError;
