import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import LocationModel from 'constants/Models/LocationModel';

class LocationsSearch extends PureComponent {
  static propTypes = {
    geolocations: PropTypes.arrayOf(LocationModel.propTypes)
  };

  static defaultProps = {
    geolocations: []
  };

  render() {
    const { geolocations } = this.props;

    return RegistryLoader(
      {
        geolocations
      },
      'components.LocationsSearch',
      () => import('./presentation')
    );
  }
}

export default withLocales(LocationsSearch);
