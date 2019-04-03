import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

class LocateMeButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  geolocateUser = () => {
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`Your location is ${latitude} and ${longitude}`);
    };

    const error = () => {
      console.log('Unable to retrieve your location');
    };

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  render() {
    return RegistryLoader(
      {
        className: this.props.className,
        handleClick: this.geolocateUser,
        localesContext: this.props.localesContext
      },
      'components.LocateMeButton',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(LocateMeButton);
