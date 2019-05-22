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

  handleAccept = () => {
    const { handleAcceptClick } = this.props;

    return handleAcceptClick();
  };

  render() {
    const { localesContext } = this.props;

    return RegistryLoader(
      {
        localesContext,
        handleAccept: this.handleAccept
      },
      'components.LocationIsClosed',
      () => import('./presentation.js')
    );
  }
}

export default LocationIsClosed;
