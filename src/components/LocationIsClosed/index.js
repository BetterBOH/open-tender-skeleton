import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class LocationIsClosed extends Component {
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
      'components.LocationIsClosed',
      () => import('./presentation.js')
    );
  }
}

export default LocationIsClosed;
