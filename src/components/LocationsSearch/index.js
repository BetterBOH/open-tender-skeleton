import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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

  onSelect = location => {
    const { location_id, slug } = location;

    this.props.history.push(`/menus/${location_id}-${slug}`);
  };

  render() {
    const {
      selectedGeocoderFeature,
      geolocations,
      localesContext
    } = this.props;

    return RegistryLoader(
      {
        selectedGeocoderFeature,
        geolocations,
        localesContext,
        onSelect: this.onSelect
      },
      'components.LocationsSearch',
      () => import('./presentation')
    );
  }
}

export default withRouter(withLocales(LocationsSearch));
